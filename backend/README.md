Backend

http://127.0.0.1:8080/ner/predict

    switch (obj.autoData.statusId) {
        case 1: {
            transformedObj['Технічний стан'] = 'повністю непошкоджене';
            break;
        }
        case 2: {
            transformedObj['Технічний стан'] =
                'професійно відремонтовані пошкодження';
            break;
        }
        case 3: {
            transformedObj['Технічний стан'] = 'не відремонтовані пошкодження';
            break;
        }
        case 4: {
            transformedObj['Технічний стан'] = 'не на ходу';
            break;
        }
    }
