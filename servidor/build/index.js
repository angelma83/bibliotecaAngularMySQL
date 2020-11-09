"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./rutas/index"));
const libros_1 = __importDefault(require("./rutas/libros"));
const administrador_1 = __importDefault(require("./rutas/administrador"));
class Servidor {
    constructor() {
        this.aplicacion = express_1.default();
        this.configuracion();
        this.rutas();
    }
    configuracion() {
        this.aplicacion.set('port', process.env.PORT || 3003);
        this.aplicacion.use(morgan_1.default('dev'));
        this.aplicacion.use(cors_1.default()); // comunicación entre angular y servidor
        this.aplicacion.use(express_1.default.json()); // recibir la información de json que recibamos de angular
        this.aplicacion.use(express_1.default.urlencoded({ extended: false })); // para recibir información de formulario
    }
    rutas() {
        this.aplicacion.use('/', index_1.default);
        this.aplicacion.use('/libreria', libros_1.default);
        this.aplicacion.use('/administrador', administrador_1.default);
    }
    start() {
        this.aplicacion.listen(this.aplicacion.get('port'), () => {
            console.log('servidor lanzado en', this.aplicacion.get('port'));
        });
    }
}
const servidor = new Servidor();
servidor.start();
