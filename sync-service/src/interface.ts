import { Request } from "express";
import * as ampq from 'amqplib/callback_api';
import * as redis from 'redis';

interface hasRabbitConnection {
    rabbitMQ : ampq.Connection
}

interface hasRedisConnection {
    redis: redis.RedisClient
}

export interface AppRequest extends Request, hasRabbitConnection, hasRedisConnection {}
