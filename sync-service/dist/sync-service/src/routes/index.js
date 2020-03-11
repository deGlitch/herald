"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewere_1 = require("../middlewere");
const panel_1 = require("./panel");
const panelController = __importStar(require("../controllers/panelController"));
const router = express_1.Router();
router.get('/', (req, res) => {
    res.json({
        error: null,
        data: "All Good",
    });
});
//@ts-ignore
router.put('/:panelId', middlewere_1.validate(panel_1.SchemeUpdate_PUT), panelController.updatePanel);
//@ts-ignore
router.post('/:panelId/ping', middlewere_1.validate(panel_1.Ping_POST), panelController.refreshPanel);
exports.default = router;
