const Koa = require('koa');
const app = new Koa();

const cors = require('@koa/cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

const { koaBody } = require('koa-body');
app.use(koaBody({ multipart: true, urlencoded: true, json: true }));

const router = require('./router/index.js');
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
