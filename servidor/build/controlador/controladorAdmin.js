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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bbdd_1 = __importDefault(require("../bbdd"));
class ControladorAdmin {
    mostrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield bbdd_1.default.query('SELECT * FROM user', (error, libros, fields) => {
                res.json(libros);
            });
        });
    }
    obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nombre = req.body.nombre;
            const pass = req.body.passw;
            // recibimos los datos por req.body
            yield bbdd_1.default.query('SELECT * FROM user WHERE nombre=?', [nombre], (error, user, fields) => {
                if (user.length == 0)
                    return res.status(401).send('Nombre incorrecto');
                if (user[0].pass !== pass)
                    return res.status(401).send('pass incorrecto');
                const token = jsonwebtoken_1.default.sign({ id: req.body.id }, 'clave');
                return res.status(200).json({ token });
            });
        });
    }
}
const controladorAdmin = new ControladorAdmin();
exports.default = controladorAdmin;
