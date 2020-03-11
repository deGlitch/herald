import { PanelData } from '../interfaces'
import * as redis from 'redis';
import { promisify } from 'util';
import { createRedisPanelId } from '../helper';

const get = async (connection: redis.RedisClient, projectId: String, panelId: String) : Promise<PanelData | undefined> => {
    const getAsync = promisify(connection.get);
    const dataString = await getAsync(createRedisPanelId(projectId, panelId));
    if(!dataString){
        return undefined;
    }
    return JSON.parse(dataString) as PanelData;
}

const set = async (connection: redis.RedisClient, projectId: String, panelId: String, panel: PanelData) => {
    const setAsync = promisify(connection.set);
    await setAsync(createRedisPanelId(projectId, panelId), JSON.stringify(panel));
}

const del = async (connection: redis.RedisClient, projectId: String, panelId: String) => {
    const deleteAsync : (key: String) => Promise<number> = promisify(connection.del);
    await deleteAsync(createRedisPanelId(projectId, panelId));
}

export default {
    get,
    set,
    del
}