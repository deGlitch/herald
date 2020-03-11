"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../../packages/model");
const index_1 = require("../integrations/index");
const helper_1 = require("../helper");
const helper_2 = require("../../../packages/helper");
exports.updatePanel = async (req, res) => {
    const { panelId } = req.params; // get the panel name from the params
    //@ts-ignore
    const { projectId = undefined } = req.user;
    const forms = req.body;
    const { redis, rabbitMQ } = req;
    let panelData = await model_1.Panel.get(redis, projectId, panelId);
    if (panelData === undefined) {
        // panel doesn't exist yet
        panelData = { forms: helper_1.FormConverter.convertFormDescriptorsToFormDataArray(forms) };
    }
    else {
        // panel exists
        panelData = {
            forms: helper_1.FormConverter.mergeFormDescriptorArrayWithFormDataArray(forms, panelData.forms)
        };
    }
    await model_1.Panel.set(redis, projectId, panelId, panelData);
    //TODO: add topic
    await index_1.RabbitMQ.sendPanelUpdateMessage(rabbitMQ, helper_2.createPanelUpdateRabbitTopicName(projectId, panelId), JSON.stringify(panelData));
    res.status(201).json({
        message: "successfully updated panel data",
        error: null,
    });
};
exports.refreshPanel = async (req, res) => {
    const { panelId } = req.params; // get the panel name from the params
    //@ts-ignore
    const { projectId = undefined } = req.user;
    const { redis, rabbitMQ } = req;
    let panelData = await model_1.Panel.get(redis, projectId, panelId);
    if (panelData === undefined) {
        //TODO: move to winston
        console.error('no panel data is available in redis');
        return;
    }
    //TODO: add topic
    await index_1.RabbitMQ.sendPanelUpdateMessage(rabbitMQ, helper_2.createPanelUpdateRabbitTopicName(projectId, panelId), JSON.stringify(panelData));
    res.status(200).json({
        message: "successfully pinged panel data",
        error: null
    });
};
