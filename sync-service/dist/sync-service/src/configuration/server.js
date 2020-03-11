"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfig = {
    port: Number(process.env.PORT) || 8080,
    host: process.env.HOST || 'localhost'
};
