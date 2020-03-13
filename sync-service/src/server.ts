'use strict';

import grpc from 'grpc';
import { 
    ConfigSyncService,
    IConfigSyncServer
 } from '../../packages/src/proto/config-sync/config_sync_grpc_pb'
 import {
     ConfirmUpdate,
     Config,
     CheckIfConfigSchemeChangedRequest,
     CheckIfConfigSchemeChangedResponse,
     SendConfigSchemeChangeResponse,
     SendConfigSchemeChangeRequest
 } from '../../packages/src/proto/config-sync/config_sync_pb'
import { PanelSchemeHash } from './model/index';
import * as Validator from '../../packages/src/validate';
import configSchemeHandler from './core/configSchemeHandler';

const server = new grpc.Server();

class ConfigSyncHandler implements IConfigSyncServer {
    checkIfConfigSchemeChanged: grpc.handleUnaryCall<CheckIfConfigSchemeChangedRequest, CheckIfConfigSchemeChangedResponse> = (call, callback) => {
        const panelID = call.request.getPanelid()
        const schemeHash = call.request.getSchemehash()

        setImmediate(async () => {
            let didChange = false;
            const currantPanelSchemeHash = await PanelSchemeHash.get(panelID);
            if(!currantPanelSchemeHash || currantPanelSchemeHash !== schemeHash){
                didChange = true;
            }

            const response = new CheckIfConfigSchemeChangedResponse()
            response.setDidchange(didChange);
            callback(null, response);
        })
    }
    sendConfigSchemeChange: grpc.handleUnaryCall<SendConfigSchemeChangeRequest, SendConfigSchemeChangeResponse> = (call, callback) => {
        const jsonStringSchemeData = call.request.getSchemejsondata()
        const response = new SendConfigSchemeChangeResponse()
        setImmediate(async () => {
            try {
                // parse out the json object and validate it
                const { value, error } = Validator.validateConfigSchemeObject(JSON.parse(jsonStringSchemeData));
                if(error){ throw error }
                await configSchemeHandler.handleConfigSchemeUpdate(value);
                response.setWassuccessful(true);
                response.setUpdatetimestamp(Date.now());
                callback(null, response);
            } catch (error) {
                response.setWassuccessful(false);
                callback(error, response);
            }
        })
    }
    configUpdatesStream: grpc.handleBidiStreamingCall<ConfirmUpdate, Config> = () => {

    }
}

const CheckIfConfigSchemeChanged = (call: ) => {

    const request = call.re

    setImmediate(async () => {
        const hash = PanelSchemeHash.get()
    })

    configHash : ConfigHash
}

const SendConfigSchemeChange = (call : Call, callback : (confirmUpdate: ConfirmUpdate) => void) => {
    callback({ wasSuccessful: true, updateTimestamp: Date.now() })
}

// a bi directional stream of config updates from the server and confirm updates from the client
const ConfigUpdatesStream = () => {
    
}

//@ts-ignore
server.addProtoService(ConfigSyncService, new ConfigSyncHandler())

export default server;
