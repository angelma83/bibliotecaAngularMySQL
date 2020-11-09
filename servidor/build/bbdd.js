"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
// establezco la conexión. 
const infobbdd_1 = __importDefault(require("./infobbdd"));
const conexion = mysql_1.default.createConnection(infobbdd_1.default.bbdd);
conexion.connect((error, connection) => {
    if (error)
        throw error;
    console.log('conectado a BBDD');
});
exports.default = conexion;
