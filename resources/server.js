"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var port = 3005;
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.listen(port);
