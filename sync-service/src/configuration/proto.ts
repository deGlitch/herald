import grpc from 'grpc';
import protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync('../../../packages/protos/config_sync.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
export default {
    ConfigSyncDescriptor: protoDescriptor.configsync
}