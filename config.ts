import dotenv = require("dotenv");
dotenv.config();

const config = {
    appId: process.env.APP_ID,
    appKey: process.env.APP_KEY,
    port: process.env.PORT
};
export default config;
