"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controladorAdmin_1 = __importDefault(require("../controlador/controladorAdmin"));
class Administrador {
    constructor() {
        this.rutas = express_1.Router();
        this.config();
    }
    config() {
        this.rutas.get('/', controladorAdmin_1.default.mostrar);
        this.rutas.post('/', controladorAdmin_1.default.obtener);
    }
}
const admin = new Administrador();
exports.default = admin.rutas;
