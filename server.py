"""
python3 server.py
"""
import os
import re
import spacy
import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel

current_dir = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(current_dir, "models/output/model-best")
model = spacy.load(MODEL_PATH)

app = FastAPI()


def preprocessing(text):
    # Додаємо пробіл після цифри, якщо перед нею йде слеш і після неї йде цифра
    text = re.sub(r'(?<=\d)/(?=\d)', ' / ', text)
    return text


def predict(text):
    text = preprocessing(text)
    doc = model(text)
    return text, [(ent.text, ent.label_, ent.start_char, ent.end_char) for ent in doc.ents]


class Item(BaseModel):
    description: str


@app.post("/ner/predict/")
async def ner_predict(item: Item):
    text, entities = predict(item.description)
    return {
        "text": text,
        "entities": entities,
    }


def run_api():
    uvicorn.run("server:app",
                host='127.0.0.1',
                port=int(os.environ.get('PORT', 8080)),
                reload=os.environ.get('DEBUG', False))

print (__name__)
if __name__ == "__main__":
    run_api()
