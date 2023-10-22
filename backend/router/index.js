const Router = require('koa-router');
const router = new Router();

const { getData } = require('../db/db.js');

const { sendDataToModel } = require('../services/requestHandler.js');

router.get('/get/:id', async (ctx) => {
    try {
        const id = ctx.params.id;

        const rezult = await getData(id);

        await sendDataToModel(rezult['Опис']);

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
