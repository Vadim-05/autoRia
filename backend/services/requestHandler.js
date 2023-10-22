// services/requestHandler.js
const url = 'http://127.0.0.1:8080/ner/predict/';

async function sendDataToModel(data) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: data }),
    };

    return import('node-fetch')
        .then((fetch) => fetch.default(url, options))
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch((error) => {
            throw new Error('Помилка при відправці запиту:' + error);
        });
}

module.exports.sendDataToModel = sendDataToModel;
