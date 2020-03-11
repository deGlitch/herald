"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ampq = __importStar(require("amqplib/callback_api"));
const setupConnection = (host, port) => {
    return new Promise((resolve, reject) => {
        ampq.connect(`${host}:${port}`, (error, connection) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(connection);
        });
    });
};
const sendPanelUpdateMessage = (connection, panelUpdateQueueName, data) => {
    return new Promise((resolve, reject) => {
        connection.createChannel((err, channel) => {
            if (err) {
                reject(err);
                return;
            }
            channel.assertQueue(panelUpdateQueueName, { durable: false });
            channel.sendToQueue(panelUpdateQueueName, Buffer.from(data));
            console.log(`sent data to queue - ${panelUpdateQueueName}`);
            resolve();
        });
    });
};
exports.RabbitMQ = {
    setupConnection,
    sendPanelUpdateMessage
};
