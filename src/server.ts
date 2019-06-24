import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import {restRouter} from "routes/restRoutes";
import config from "../config";
const app = new Koa();

const bootstrap = async () => {
    app.use(bodyParser());
    app.use(restRouter.routes(), restRouter.allowedMethods());

    app.listen(config.port);
};
bootstrap();
