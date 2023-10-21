const Koa = require('koa');
const app = new Koa();

const dotenv = require('dotenv');
dotenv.config();

const { koaBody } = require('koa-body');
app.use(koaBody({ multipart: true, urlencoded: true, json: true }));

const router = require('./router/index.js');
app.use(router.routes());
app.use(router.allowedMethods());
/*
const connectToDatabase = require('./db/db.mjs');
connectToDatabase();
*/
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});
