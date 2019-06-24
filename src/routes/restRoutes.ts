import controller = require("controllers");
import * as Router from "koa-router";
export const restRouter = new Router();

restRouter.get("/dictionaries/lemmas/:world_id", controller.oxfordDictionary.getLemmas);
restRouter.get("/dictionaries/entries/:world_id", controller.oxfordDictionary.getEntries);
