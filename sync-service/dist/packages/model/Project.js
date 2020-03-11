"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Project = mongoose_1.default.model('Project', new mongoose_1.default.Schema({
    name: String,
    members: [String],
    panelIdArray: [String]
}));
