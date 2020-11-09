"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bbdd_1 = __importDefault(require("../bbdd"));
class ControladorLibros {
    mostrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // recibimos los datos por req.body
            yield bbdd_1.default.query('SELECT * FROM libros', (error, libros, fields) => {
                res.json(libros);
            });
        });
    }
    filtrarLibros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // const id= req.params.id
            yield bbdd_1.default.query('SELECT * FROM libros WHERE id=?', [id], (error, libro, fields) => {
                res.json(libro);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield bbdd_1.default.query('INSERT INTO libros set ?', [req.body]);
            res.json({ text: 'Guardo juego' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield bbdd_1.default.query('DELETE FROM libros WHERE id=?', [id]);
            res.json({ text: 'eliminando libro' + typeof (id) + req.params.id });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const titulo = req.body.titulo;
            const autor = req.body.autor;
            const categoria = req.body.categoria;
            const descripcion = req.body.descripcion;
            const imagen = req.body.imagen;
            yield bbdd_1.default.query('UPDATE libros SET titulo= ?, autor=?, categoria=?, descripcion=?, imagen=? WHERE id=?', [titulo, autor, categoria, descripcion, imagen, id]);
            res.json({ text: 'actualización de libro' + req.body });
        });
    }
}
const controladorLibros = new ControladorLibros();
exports.default = controladorLibros;
