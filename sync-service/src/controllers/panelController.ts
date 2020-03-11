import { AppRequest } from '../interface'
import { Response } from "express";
import Panel from '../../../packages/model/Panel'
import { FormDescriptor } from '../../../packages/interfaces';
import { RabbitMQ } from '../integrations/index';
import { FormConverter } from '../helper';
import { createPanelUpdateRabbitTopicName } from '../../../packages/helper'

export const updatePanel = async (req: AppRequest, res: Response) => {
    const { panelId } = req.params; // get the panel name from the params

    //@ts-ignore
    const { projectId=undefined } = req.user;
    const forms = req.body as FormDescriptor[]
    
    const { redis, rabbitMQ } = req

    let panelData = await Panel.get(redis, projectId, panelId);

    if(panelData === undefined){
        // panel doesn't exist yet
        panelData = { forms: FormConverter.convertFormDescriptorsToFormDataArray(forms) }
    } else {
        // panel exists
        panelData = { 
            forms: FormConverter.mergeFormDescriptorArrayWithFormDataArray(forms, panelData.forms)
        }
    }

    await Panel.set(redis, projectId, panelId, panelData)

    //TODO: add topic
    await RabbitMQ.sendPanelUpdateMessage(
        rabbitMQ,
        createPanelUpdateRabbitTopicName(projectId, panelId),
        JSON.stringify(panelData)
    );

    res.status(201).json({
        message: "successfully updated panel data",
        error: null,
    })
}

export const refreshPanel = async (req: AppRequest, res: Response) => {
    const { panelId } = req.params; // get the panel name from the params

    //@ts-ignore
    const { projectId=undefined } = req.user;
    const { redis, rabbitMQ } = req;
    let panelData = await Panel.get(redis, projectId, panelId);

    if(panelData === undefined){
        //TODO: move to winston
        console.error('no panel data is available in redis');
        return;
    }

    //TODO: add topic
    
    await RabbitMQ.sendPanelUpdateMessage(
        rabbitMQ,
        createPanelUpdateRabbitTopicName(projectId, panelId),
        JSON.stringify(panelData)
    );

    res.status(200).json({
        message: "successfully pinged panel data",
        error: null
    })
}