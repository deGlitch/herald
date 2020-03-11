"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitConfig = {
    host: process.env.RABBIT_HOST || 'localhost',
    port: Number(process.env.RABBIT_PORT) || 4369
};
