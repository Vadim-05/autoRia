const axios = require('axios');

async function getData(id) {
    try {
        const apiKey = 'hPakOudm8AaUyt5aMie8MKqY0xtcIuDWowepg3pa';
        const url = `https://developers.ria.com/auto/info?api_key=${apiKey}&auto_id=${id}`;
        const response = await axios.get(url);

        if (response.status === 200) {
            const obj = await response.data;
            const currentCar = await transformData(obj);
            return currentCar;
        } else {
            throw new Error('Request failed with status: ' + response.status);
        }
    } catch (error) {
        throw error;
    }
}

async function transformData(obj) {
    const transformedObj = {
        id: obj.autoData.autoId,
        КПП: obj.autoData.gearboxName,
        'Тип приводу': obj.autoData.driveName,
        'Участь в ДТП': obj.autoInfoBar.damage === true ? 'так' : 'ні',
        'Під пригон': obj.autoInfoBar.abroad === true ? 'так' : 'ні',
        'Технічний стан': 'не вказано',
        'Лакофарбове покриття': 'не вказано',
        'Можливий торг': obj.auctionPossible === true ? 'так' : 'ні',
        'Можливий обмін': obj.exchangePossible === true ? 'так' : 'ні',
        Опис: obj.autoData.description,
        Фотографія: obj.photoData.seoLinkB ?? 'відсутня',
    };

    switch (obj.autoData.mainCurrency) {
        case 'UAH': {
            transformedObj['Ціна автомобіля'] = obj.UAH + ' грн';
            break;
        }
        case 'USD': {
            transformedObj['Ціна автомобіля'] = obj.USD + ' $';
            break;
        }
        case 'EUR': {
            transformedObj['Ціна автомобіля'] = obj.EUR + ' євро';
            break;
        }
    }

    return transformedObj;
}

module.exports.getData = getData;
