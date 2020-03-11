"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisConfig = {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 4369
};
