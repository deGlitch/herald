"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const helper_1 = require("../helper");
const get = async (connection, projectId, panelId) => {
    const getAsync = util_1.promisify(connection.get);
    const dataString = await getAsync(helper_1.createRedisPanelId(projectId, panelId));
    if (!dataString) {
        return undefined;
    }
    return JSON.parse(dataString);
};
const set = async (connection, projectId, panelId, panel) => {
    const setAsync = util_1.promisify(connection.set);
    await setAsync(helper_1.createRedisPanelId(projectId, panelId), JSON.stringify(panel));
};
const del = async (connection, projectId, panelId) => {
    const deleteAsync = util_1.promisify(connection.del);
    await deleteAsync(helper_1.createRedisPanelId(projectId, panelId));
};
exports.Panel = {
    get,
    set,
    del
};
