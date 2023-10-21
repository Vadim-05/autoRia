const Router = require('koa-router');
const router = new Router();

router.get('/get/1', async (ctx) => {
    try {
        const result = {
            id: 1,
            'коробка передач': 'ручна',
            'Тип приводу': 'передній',
            'Участь в ДТП': 'так',
            'Під пригон': 'так',
            'Технічний стан': 'повністо непошкоджене',
            'Лакофарбове покриття': 'як нове',
            'Ціна автомобіля': '$10000',
            'Можливий торг': 'так',
            'Можливий обмін': 'так',
        };
        ctx.body = result;
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
