// package: configsync
// file: config_sync.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as config_sync_pb from "./config_sync_pb";

interface IConfigSyncService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    configUpdatesStream: IConfigSyncService_IConfigUpdatesStream;
    checkIfConfigSchemeChanged: IConfigSyncService_ICheckIfConfigSchemeChanged;
    sendConfigSchemeChange: IConfigSyncService_ISendConfigSchemeChange;
}

interface IConfigSyncService_IConfigUpdatesStream extends grpc.MethodDefinition<config_sync_pb.ConfirmUpdate, config_sync_pb.Config> {
    path: string; // "/configsync.ConfigSync/ConfigUpdatesStream"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<config_sync_pb.ConfirmUpdate>;
    requestDeserialize: grpc.deserialize<config_sync_pb.ConfirmUpdate>;
    responseSerialize: grpc.serialize<config_sync_pb.Config>;
    responseDeserialize: grpc.deserialize<config_sync_pb.Config>;
}
interface IConfigSyncService_ICheckIfConfigSchemeChanged extends grpc.MethodDefinition<config_sync_pb.CheckIfConfigSchemeChangedRequest, config_sync_pb.CheckIfConfigSchemeChangedResponse> {
    path: string; // "/configsync.ConfigSync/CheckIfConfigSchemeChanged"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<config_sync_pb.CheckIfConfigSchemeChangedRequest>;
    requestDeserialize: grpc.deserialize<config_sync_pb.CheckIfConfigSchemeChangedRequest>;
    responseSerialize: grpc.serialize<config_sync_pb.CheckIfConfigSchemeChangedResponse>;
    responseDeserialize: grpc.deserialize<config_sync_pb.CheckIfConfigSchemeChangedResponse>;
}
interface IConfigSyncService_ISendConfigSchemeChange extends grpc.MethodDefinition<config_sync_pb.SendConfigSchemeChangeRequest, config_sync_pb.SendConfigSchemeChangeResponse> {
    path: string; // "/configsync.ConfigSync/SendConfigSchemeChange"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<config_sync_pb.SendConfigSchemeChangeRequest>;
    requestDeserialize: grpc.deserialize<config_sync_pb.SendConfigSchemeChangeRequest>;
    responseSerialize: grpc.serialize<config_sync_pb.SendConfigSchemeChangeResponse>;
    responseDeserialize: grpc.deserialize<config_sync_pb.SendConfigSchemeChangeResponse>;
}

export const ConfigSyncService: IConfigSyncService;

export interface IConfigSyncServer {
    configUpdatesStream: grpc.handleBidiStreamingCall<config_sync_pb.ConfirmUpdate, config_sync_pb.Config>;
    checkIfConfigSchemeChanged: grpc.handleUnaryCall<config_sync_pb.CheckIfConfigSchemeChangedRequest, config_sync_pb.CheckIfConfigSchemeChangedResponse>;
    sendConfigSchemeChange: grpc.handleUnaryCall<config_sync_pb.SendConfigSchemeChangeRequest, config_sync_pb.SendConfigSchemeChangeResponse>;
}

export interface IConfigSyncClient {
    configUpdatesStream(): grpc.ClientDuplexStream<config_sync_pb.ConfirmUpdate, config_sync_pb.Config>;
    configUpdatesStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<config_sync_pb.ConfirmUpdate, config_sync_pb.Config>;
    configUpdatesStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<config_sync_pb.ConfirmUpdate, config_sync_pb.Config>;
    checkIfConfigSchemeChanged(request: config_sync_pb.CheckIfConfigSchemeChangedRequest, callback: (error: grpc.ServiceError | null, response: config_sync_pb.CheckIfConfigSchemeChangedResponse) => void): grpc.ClientUnaryCall;
    checkIfConfigSchemeChanged(request: config_sync_pb.CheckIfConfigSchemeChangedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_sync_pb.CheckIfConfigSchemeChangedResponse) => void): grpc.ClientUnaryCall;
    checkIfConfigSchemeChanged(request: config_sync_pb.CheckIfConfigSchemeChangedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_sync_pb.CheckIfConfigSchemeChangedResponse) => void): grpc.ClientUnaryCall;
    sendConfigSchemeChange(request: config_sync_pb.SendConfigSchemeChangeRequest, callback: (error: grpc.ServiceError | null, response: config_sync_pb.SendConfigSchemeChangeResponse) => void): grpc.ClientUnaryCall;
    sendConfigSchemeChange(request: config_sync_pb.SendConfigSchemeChangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_sync_pb.SendConfigSchemeChangeResponse) => void): grpc.ClientUnaryCall;
    sendConfigSchemeChange(request: config_sync_pb.SendConfigSchemeChangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_sync_pb.SendConfigSchemeChangeResponse) => void): grpc.ClientUnaryCall;
}

export class ConfigSyncClient extends grpc.Client implements IConfigSyncClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public configUpdatesStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<config_sync_pb.ConfirmUpdate, config_sync_pb.Config>;
    public configUpdatesStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<config_sync_pb.ConfirmUpdate, config_sync_pb.Config>;
    public checkIfConfigSchemeChanged(request: config_sync_pb.CheckIfConfigSchemeChangedRequest, callback: (error: grpc.ServiceError | null, response: config_sync_pb.CheckIfConfigSchemeChangedResponse) => void): grpc.ClientUnaryCall;
    public checkIfConfigSchemeChanged(request: config_sync_pb.CheckIfConfigSchemeChangedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_sync_pb.CheckIfConfigSchemeChangedResponse) => void): grpc.ClientUnaryCall;
    public checkIfConfigSchemeChanged(request: config_sync_pb.CheckIfConfigSchemeChangedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_sync_pb.CheckIfConfigSchemeChangedResponse) => void): grpc.ClientUnaryCall;
    public sendConfigSchemeChange(request: config_sync_pb.SendConfigSchemeChangeRequest, callback: (error: grpc.ServiceError | null, response: config_sync_pb.SendConfigSchemeChangeResponse) => void): grpc.ClientUnaryCall;
    public sendConfigSchemeChange(request: config_sync_pb.SendConfigSchemeChangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: config_sync_pb.SendConfigSchemeChangeResponse) => void): grpc.ClientUnaryCall;
    public sendConfigSchemeChange(request: config_sync_pb.SendConfigSchemeChangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: config_sync_pb.SendConfigSchemeChangeResponse) => void): grpc.ClientUnaryCall;
}
