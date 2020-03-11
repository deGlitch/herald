"use strict";

import winston from "winston";
import * as ampq from 'amqplib/callback_api';
import * as redis from 'redis';
import morgan from 'morgan';
import express, { Request, Response, NextFunction} from "express";
import cors from 'cors';
import passport from 'passport';
import helmet from 'helmet';
import bodyParser from "body-parser";

import { ServerConfig, RabbitConfig, RedisConfig, MongoConfig } from "./configuration";
import { RabbitMQ, Redis, MongoDB } from './integrations';
import AppRoutes from './routes';
import { Mongoose, mongo } from "mongoose";

/* Global Inits */
const app = express()
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" })
  ]
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

/* Lazy Inits */
let rabbitConnection : ampq.Connection
let redisConnection : redis.RedisClient
let mongoConnection : Mongoose

/* Databases And Third Party Services */

const RabbitConnectionMiddlewere = async (req : Request, res : Response, next : NextFunction) => {
  try {
    if(!rabbitConnection){
      logger.log('info', '[Integration] No active RabbitMQ connection creating new one')
      rabbitConnection = await RabbitMQ.setupConnection(RabbitConfig.host, RabbitConfig.port);
      logger.log('info', '[Integration] new RabbitMQ connection has been created successfully')
    } else {
      logger.log('info', '[Integration] reusing active RabbitMQ connection')
    }
    
    //@ts-ignore
    req.rabbitMQ = rabbitConnection

    return next()
  } catch (error) {
    logger.log('error', '[Integration] failed to connect to RabbitMQ')
    return next(error)
  }
}

const RedisConnectionMiddlewere = async (req : Request, res : Response, next : NextFunction) => {
  try {
    if(!redisConnection){
      logger.log('info', '[Integration] No active Redis connection creating new one')
      redisConnection = await Redis.setupConnection(RedisConfig.host, RedisConfig.port);
      logger.log('info', '[Integration] new Redis connection has been created successfully')
    } else {
      logger.log('info', '[Integration] reusing active Redis connection')
    }

    //@ts-ignore
    req.redis = redisConnection

    return next()
  } catch (error) {
    logger.log('error', '[Integration] failed to connect to RabbitMQ')
    return next(error)
  }
}

const MongoConnectionMiddlewere = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!mongoConnection){
      logger.log('info', '[Integration] No active MongoDB connection creating new one')
      mongoConnection = await MongoDB.connect(MongoConfig.connectionString);
      logger.log('info', '[Integration] new MongoDB connection has been created successfully')
    } else {
      logger.log('info', '[Integration] reusing active MongoDB connection')
    }
    return next()
  } catch (error) {
    logger.log('error', '[Integration] failed to connect to MongoDB')
    return next(error)
  }
}

/* Express Middlewere */
app.use(helmet())
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(RabbitConnectionMiddlewere)
app.use(RedisConnectionMiddlewere)
app.use(MongoConnectionMiddlewere)
app.use('/panel', AppRoutes)

const init = () => {
  app.listen(ServerConfig.port, ServerConfig.host, () => {
    logger.log(
      "info",
      `server started on ${ServerConfig.host}:${ServerConfig.port}`
    );
  })
};

process.on("uncaughtException", (err: Error) => {
  logger.log("error", err.message);
  process.exit(1);
});

init();

export default app;
