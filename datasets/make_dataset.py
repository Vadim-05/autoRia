import os
import json
import glob
from copy import copy
from collections import Counter
import spacy
from tqdm import tqdm
from spacy.tokens import DocBin

current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.join(current_dir, "../")


def load_label_studio_json_annotation():
    annotations = []
    for json_path in glob.glob(os.path.join(root_dir, "datasets/labelstudio_json_annotation/*")):
        with open(json_path, encoding="utf-8") as fp:
            data = json.load(fp)
        annotations.extend(data)
    return annotations


def format_annotations(annotations):
    train_data = []
    label_counter = Counter()

    for data in annotations:
        entities = set()

        text = data["description"]
        if data.get("label", None) is None:
            continue
        for result in data["label"]:
            for label in result["labels"]:
                label_counter[label] += 1
                entitie = (result["start"], result["end"], label)
                entities.add(entitie)
        if len(entities):
            train_data.append((text, {"entities": list(entities)}))
    print(label_counter)
    return train_data


def normalize_text(text, tags):
    # Сортуємо tags за start_index
    tags_sorted = sorted(tags, key=lambda x: x[1])

    offset = 0  # Додатковий зсув, який збільшується на 2 з кожним новим доданим тегом

    for tag in tags_sorted:
        start_index = tag[1] + offset
        end_index = tag[2] + offset

        # Додаємо пробіли перед та після тегу
        text = text[:start_index] + " " + text[start_index:end_index] + " " + text[end_index:]

        # Збільшуємо зсув
        offset += 2

        # Змінюємо індекси для поточного тегу
        tag[1] = start_index
        tag[2] = end_index + 2
    return text, tags


def trim_entity_spans(text, tags):
    """
    Removes leading and trailing white spaces from entity spans.
    """
    tags_sorted = sorted(tags, key=lambda x: x[1])
    index = 0
    while index < len(text) - 1:
        if text[index:index+2] == "  ":
            for tag in tags_sorted:
                if tag[1] > index:
                    tag[1] -= 1
                if tag[2] > index:
                    tag[2] -= 1

            text = text[:index] + text[index+1:]
        index += 1

    return text, tags_sorted


def strip_tags(text, tags):
    for tag in tags:
        l_white_spaces_count = len(text[tag[1]:tag[2]]) - len(text[tag[1]:tag[2]].lstrip())
        r_white_spaces_count = len(text[tag[1]:tag[2]]) - len(text[tag[1]:tag[2]].rstrip())
        tag[1] += l_white_spaces_count
        tag[2] -= r_white_spaces_count


def make_dataset(train_data):
    nlp = spacy.blank("uk")  # load a new spacy model
    db = DocBin()  # create a DocBin object

    for text, annot in tqdm(train_data):  # data in previous format
        tags = []
        for start, end, label in annot["entities"]:  # add character indexes
            tags.append([text[start:end], start, end, label])
        text = copy(text)
        text, tags = normalize_text(text, tags)
        text, tags = trim_entity_spans(text, tags)
        strip_tags(text, tags)

        doc = nlp.make_doc(text)  # create doc object from text
        ents = []
        for tag_text, start, end, label in tags:  # add character indexes
            span = doc.char_span(start, end, label=label, alignment_mode="contract")
            ents.append(span)
        try:
            doc.ents = ents  # label the text with the ents
            db.add(doc)
        except Exception as _:
            print(f"PROBLEM with text {ents}")

    print(len(db))
    db.to_disk(os.path.join(current_dir, "train.spacy"))  # save the docbin object


def main():
    annotations = load_label_studio_json_annotation()
    train_data = format_annotations(annotations)
    make_dataset(train_data)


if __name__ == "__main__":
    main()
