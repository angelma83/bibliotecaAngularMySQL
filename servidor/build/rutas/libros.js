"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controladorLibros_1 = __importDefault(require("../controlador/controladorLibros"));
class Libros {
    constructor() {
        this.rutas = express_1.Router();
        this.config();
    }
    config() {
        this.rutas.get('/', controladorLibros_1.default.mostrar);
        this.rutas.get('/:id', controladorLibros_1.default.filtrarLibros);
        this.rutas.post('/', controladorLibros_1.default.create);
        this.rutas.delete('/:id', controladorLibros_1.default.delete);
        this.rutas.put('/:id', controladorLibros_1.default.actualizar);
    }
}
const libros = new Libros();
exports.default = libros.rutas;
