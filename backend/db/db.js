// db.js
const axios = require('axios');

async function getData(id) {
    try {
        const apiKey = 'hPakOudm8AaUyt5aMie8MKqY0xtcIuDWowepg3pa';
        const url = `https://developers.ria.com/auto/info?api_key=${apiKey}&auto_id=${id}`;
        const response = await axios.get(url);

        if (response.status === 200) {
            console.log(id);
            return response.data;
        } else {
            throw new Error('Request failed with status: ' + response.status);
        }
    } catch (error) {
        throw error;
    }
}

module.exports = getData;
