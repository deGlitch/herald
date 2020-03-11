"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const configuration_1 = require("./configuration");
const body_parser_1 = __importDefault(require("body-parser"));
const integrations_1 = require("./integrations");
const routes_1 = __importDefault(require("./routes"));
/* Global Inits */
const app = express_1.default();
const logger = winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston_1.default.transports.File({ filename: "error.log", level: "error" }),
        new winston_1.default.transports.File({ filename: "combined.log" })
    ]
});
if (process.env.NODE_ENV !== "production") {
    logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple()
    }));
}
/* Lazy Inits */
let rabbitConnection;
let redisConnection;
/* Databases And Third Party Services */
const RabbitConnectionMiddlewere = async (req, res, next) => {
    try {
        if (rabbitConnection) {
            logger.log('info', '[Integration] No active RabbitMQ connection creating new one');
            rabbitConnection = await integrations_1.RabbitMQ.setupConnection(configuration_1.RabbitConfig.host, configuration_1.RabbitConfig.port);
            logger.log('info', '[Integration] new RabbitMQ connection has been created successfully');
        }
        else {
            logger.log('info', '[Integration] reusing active RabbitMQ connection');
        }
        //@ts-ignore
        req.rabbitMQ = rabbitConnection;
        return next();
    }
    catch (error) {
        logger.log('error', '[Integration] failed to connect to RabbitMQ');
        res.sendStatus(500);
    }
};
const RedisConnectionMiddlewere = async (req, res, next) => {
    try {
        if (redisConnection) {
            logger.log('info', '[Integration] No active Redis connection creating new one');
            redisConnection = await integrations_1.Redis.setupConnection(configuration_1.RedisConfig.host, configuration_1.RedisConfig.port);
            logger.log('info', '[Integration] new Redis connection has been created successfully');
        }
        else {
            logger.log('info', '[Integration] reusing active Redis connection');
        }
        //@ts-ignore
        req.redis = redisConnection;
        return next();
    }
    catch (error) {
        logger.log('error', '[Integration] failed to connect to RabbitMQ');
        res.sendStatus(500);
    }
};
/* Express Middlewere */
app.use(helmet_1.default());
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(RabbitConnectionMiddlewere);
app.use(RedisConnectionMiddlewere);
app.use('/panel', routes_1.default);
const init = () => {
    app.listen(configuration_1.ServerConfig.port, configuration_1.ServerConfig.host, () => {
        logger.log("info", `server started on ${configuration_1.ServerConfig.host}:${configuration_1.ServerConfig.port}`);
    });
};
process.on("uncaughtException", (err) => {
    logger.log("error", err.message);
    process.exit(1);
});
init();
exports.default = app;
