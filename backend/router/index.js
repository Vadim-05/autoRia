const Router = require('koa-router');
const router = new Router();

const getData = require('../db/db.js');

router.get('/get/:id', async (ctx) => {
    try {
        const id = ctx.params.id;

        const rezult = await getData(id);

        ctx.body = rezult;
    } catch (error) {
        console.error('Error retrieving tree_nodes', error);
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: 'Error retrieving tree_nodes',
        };
    }
});

module.exports = router;
