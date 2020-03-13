// package: configsync
// file: config_sync.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SendConfigSchemeChangeRequest extends jspb.Message { 
    getSchemejsondata(): string;
    setSchemejsondata(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendConfigSchemeChangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendConfigSchemeChangeRequest): SendConfigSchemeChangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendConfigSchemeChangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendConfigSchemeChangeRequest;
    static deserializeBinaryFromReader(message: SendConfigSchemeChangeRequest, reader: jspb.BinaryReader): SendConfigSchemeChangeRequest;
}

export namespace SendConfigSchemeChangeRequest {
    export type AsObject = {
        schemejsondata: string,
    }
}

export class CheckIfConfigSchemeChangedRequest extends jspb.Message { 
    getPanelid(): string;
    setPanelid(value: string): void;

    getSchemehash(): string;
    setSchemehash(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckIfConfigSchemeChangedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CheckIfConfigSchemeChangedRequest): CheckIfConfigSchemeChangedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckIfConfigSchemeChangedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckIfConfigSchemeChangedRequest;
    static deserializeBinaryFromReader(message: CheckIfConfigSchemeChangedRequest, reader: jspb.BinaryReader): CheckIfConfigSchemeChangedRequest;
}

export namespace CheckIfConfigSchemeChangedRequest {
    export type AsObject = {
        panelid: string,
        schemehash: string,
    }
}

export class CheckIfConfigSchemeChangedResponse extends jspb.Message { 
    getDidchange(): boolean;
    setDidchange(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckIfConfigSchemeChangedResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CheckIfConfigSchemeChangedResponse): CheckIfConfigSchemeChangedResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckIfConfigSchemeChangedResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckIfConfigSchemeChangedResponse;
    static deserializeBinaryFromReader(message: CheckIfConfigSchemeChangedResponse, reader: jspb.BinaryReader): CheckIfConfigSchemeChangedResponse;
}

export namespace CheckIfConfigSchemeChangedResponse {
    export type AsObject = {
        didchange: boolean,
    }
}

export class ConfirmUpdate extends jspb.Message { 
    getWassuccessful(): boolean;
    setWassuccessful(value: boolean): void;

    getUpdatetimestamp(): number;
    setUpdatetimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfirmUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: ConfirmUpdate): ConfirmUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfirmUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfirmUpdate;
    static deserializeBinaryFromReader(message: ConfirmUpdate, reader: jspb.BinaryReader): ConfirmUpdate;
}

export namespace ConfirmUpdate {
    export type AsObject = {
        wassuccessful: boolean,
        updatetimestamp: number,
    }
}

export class SendConfigSchemeChangeResponse extends jspb.Message { 
    getWassuccessful(): boolean;
    setWassuccessful(value: boolean): void;

    getUpdatetimestamp(): number;
    setUpdatetimestamp(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendConfigSchemeChangeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendConfigSchemeChangeResponse): SendConfigSchemeChangeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendConfigSchemeChangeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendConfigSchemeChangeResponse;
    static deserializeBinaryFromReader(message: SendConfigSchemeChangeResponse, reader: jspb.BinaryReader): SendConfigSchemeChangeResponse;
}

export namespace SendConfigSchemeChangeResponse {
    export type AsObject = {
        wassuccessful: boolean,
        updatetimestamp: number,
    }
}

export class Config extends jspb.Message { 
    getConfigjsondata(): string;
    setConfigjsondata(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
    export type AsObject = {
        configjsondata: string,
    }
}
