// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var config_sync_pb = require('./config_sync_pb.js');

function serialize_configsync_CheckIfConfigSchemeChangedRequest(arg) {
  if (!(arg instanceof config_sync_pb.CheckIfConfigSchemeChangedRequest)) {
    throw new Error('Expected argument of type configsync.CheckIfConfigSchemeChangedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_configsync_CheckIfConfigSchemeChangedRequest(buffer_arg) {
  return config_sync_pb.CheckIfConfigSchemeChangedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_configsync_CheckIfConfigSchemeChangedResponse(arg) {
  if (!(arg instanceof config_sync_pb.CheckIfConfigSchemeChangedResponse)) {
    throw new Error('Expected argument of type configsync.CheckIfConfigSchemeChangedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_configsync_CheckIfConfigSchemeChangedResponse(buffer_arg) {
  return config_sync_pb.CheckIfConfigSchemeChangedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_configsync_Config(arg) {
  if (!(arg instanceof config_sync_pb.Config)) {
    throw new Error('Expected argument of type configsync.Config');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_configsync_Config(buffer_arg) {
  return config_sync_pb.Config.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_configsync_ConfirmUpdate(arg) {
  if (!(arg instanceof config_sync_pb.ConfirmUpdate)) {
    throw new Error('Expected argument of type configsync.ConfirmUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_configsync_ConfirmUpdate(buffer_arg) {
  return config_sync_pb.ConfirmUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_configsync_SendConfigSchemeChangeRequest(arg) {
  if (!(arg instanceof config_sync_pb.SendConfigSchemeChangeRequest)) {
    throw new Error('Expected argument of type configsync.SendConfigSchemeChangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_configsync_SendConfigSchemeChangeRequest(buffer_arg) {
  return config_sync_pb.SendConfigSchemeChangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_configsync_SendConfigSchemeChangeResponse(arg) {
  if (!(arg instanceof config_sync_pb.SendConfigSchemeChangeResponse)) {
    throw new Error('Expected argument of type configsync.SendConfigSchemeChangeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_configsync_SendConfigSchemeChangeResponse(buffer_arg) {
  return config_sync_pb.SendConfigSchemeChangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConfigSyncService = exports.ConfigSyncService = {
  // a bi directional stream of config updates from the server and confirm updates from the client
configUpdatesStream: {
    path: '/configsync.ConfigSync/ConfigUpdatesStream',
    requestStream: true,
    responseStream: true,
    requestType: config_sync_pb.ConfirmUpdate,
    responseType: config_sync_pb.Config,
    requestSerialize: serialize_configsync_ConfirmUpdate,
    requestDeserialize: deserialize_configsync_ConfirmUpdate,
    responseSerialize: serialize_configsync_Config,
    responseDeserialize: deserialize_configsync_Config,
  },
  // a request for a check if the scheme changed
checkIfConfigSchemeChanged: {
    path: '/configsync.ConfigSync/CheckIfConfigSchemeChanged',
    requestStream: false,
    responseStream: false,
    requestType: config_sync_pb.CheckIfConfigSchemeChangedRequest,
    responseType: config_sync_pb.CheckIfConfigSchemeChangedResponse,
    requestSerialize: serialize_configsync_CheckIfConfigSchemeChangedRequest,
    requestDeserialize: deserialize_configsync_CheckIfConfigSchemeChangedRequest,
    responseSerialize: serialize_configsync_CheckIfConfigSchemeChangedResponse,
    responseDeserialize: deserialize_configsync_CheckIfConfigSchemeChangedResponse,
  },
  // a request to update the scheme
sendConfigSchemeChange: {
    path: '/configsync.ConfigSync/SendConfigSchemeChange',
    requestStream: false,
    responseStream: false,
    requestType: config_sync_pb.SendConfigSchemeChangeRequest,
    responseType: config_sync_pb.SendConfigSchemeChangeResponse,
    requestSerialize: serialize_configsync_SendConfigSchemeChangeRequest,
    requestDeserialize: deserialize_configsync_SendConfigSchemeChangeRequest,
    responseSerialize: serialize_configsync_SendConfigSchemeChangeResponse,
    responseDeserialize: deserialize_configsync_SendConfigSchemeChangeResponse,
  },
};

exports.ConfigSyncClient = grpc.makeGenericClientConstructor(ConfigSyncService);
