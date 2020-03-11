"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const stringFieldScheme = joi_1.default.object({
    type: joi_1.default.string().valid(...['string']),
    id: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    default: joi_1.default.string().required()
});
const booleanFieldScheme = joi_1.default.object({
    type: joi_1.default.string().valid(...['boolean']),
    id: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    default: joi_1.default.bool().required()
});
exports.formScheme = joi_1.default.object({
    id: joi_1.default.string().min(1).max(1024).required(),
    name: joi_1.default.string().min(1).max(1024).required(),
    description: joi_1.default.string().min(1).max(1024),
    fields: joi_1.default.array().items(...[stringFieldScheme, booleanFieldScheme])
});
