const Router = require('koa-router');
const router = new Router();

const { getData } = require('../db/db.js');

const { sendDataToModel } = require('../services/requestHandler.js');
const { transformDataFromModel } = require('../services/transform_data.js');

router.get('/get/:id', async (ctx) => {
    try {
        const id = ctx.params.id;

        const dataFromApi = await getData(id);

        const dataFromModel = await sendDataToModel(dataFromApi['Опис']);
        const entitiesfromModel = dataFromModel.entities;

        const dataTransformedFromModel = await transformDataFromModel(
            dataFromApi,
            entitiesfromModel
        );

        const rezult = {
            dataFromApi,
            dataTransformedFromModel,
            entitiesfromModel,
        };
        ctx.body = rezult;
    } catch (error) {
        console.error('Error retrieving data', error);
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: 'Error retrieving data',
        };
    }
});

module.exports = router;
