import * as ampq from 'amqplib/callback_api';

const setupConnection = (host: string, port: number) : Promise<ampq.Connection> => {
    return new Promise((resolve, reject) => {
        ampq.connect(`${host}:${port}`, (error, connection) => {
            if(error){
                reject(error);
                return;
            }

            resolve(connection);
        })
    })
}

const sendPanelUpdateMessage = (connection: ampq.Connection, panelUpdateQueueName: string, data: string) => {
    return new Promise((resolve, reject) => {
        connection.createChannel((err, channel) => {
            if(err){
                reject(err)
                return;
            }

            channel.assertQueue(panelUpdateQueueName, { durable: false });
            channel.sendToQueue(panelUpdateQueueName, Buffer.from(data));
            console.log(`sent data to queue - ${panelUpdateQueueName}`);

            resolve();
        })
    })
}

export const RabbitMQ = {
    setupConnection,
    sendPanelUpdateMessage
}