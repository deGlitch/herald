"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const scheme_1 = require("../../../packages/scheme");
exports.SchemeUpdate_PUT = joi_1.default.object({
    params: {
        panelId: joi_1.default.string().required()
    },
    body: joi_1.default.array().items(scheme_1.formScheme)
});
exports.Ping_POST = joi_1.default.object({
    body: {
        panel: joi_1.default.string().min(1).max(256).required()
    }
});
