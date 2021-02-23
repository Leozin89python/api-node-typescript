"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var port = 3004;
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use('/', function (req, res) {
    res.json({
        msg: 'online'
    });
});
app.listen(port);
