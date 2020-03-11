'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis = __importStar(require("redis"));
const setupConnection = (host, port) => {
    return new Promise((resolve, reject) => {
        const client = redis.createClient({ host, port });
        client.on('ready', () => {
            resolve(client);
        });
        client.on('error', (err) => {
            reject(err);
        });
    });
};
exports.Redis = {
    setupConnection,
};
