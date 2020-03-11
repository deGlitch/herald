'use strict';

import { promisify } from 'util';
import * as redis from 'redis';

const setupConnection = (host: string, port: number) : Promise<redis.RedisClient> => {
    return new Promise((resolve, reject) => {
        const client = redis.createClient({ host, port })
        client.on('ready', () => {
            resolve(client);
        })

        client.on('error', (err) => {
            reject(err);
        })
    })
}

export const Redis = {
    setupConnection,
}