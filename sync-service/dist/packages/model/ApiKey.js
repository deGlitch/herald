"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ms_1 = __importDefault(require("ms"));
exports.ApiKey = mongoose_1.default.model('ApiKey', new mongoose_1.default.Schema({
    key: { type: String, index: true },
    name: { type: String, index: true },
    projectId: { type: String, index: true },
    expiration: { type: Date, default: Date.now() + ms_1.default('365d') },
    scope: [String]
}));
