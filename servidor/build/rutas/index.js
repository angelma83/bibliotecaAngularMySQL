"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controladorIndex_1 = require("../controlador/controladorIndex");
class Index {
    constructor() {
        this.rutas = express_1.Router();
        this.config();
    }
    config() {
        this.rutas.get('/', controladorIndex_1.controladorIndex.iniciacion);
    }
}
const index = new Index();
exports.default = index.rutas;
