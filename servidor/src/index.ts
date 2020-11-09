import express, { Application } from 'express';

import cors from 'cors';
import morgan from 'morgan';

import rutas from './rutas/index';
import libros from './rutas/libros';
import user from './rutas/administrador';

class Servidor {

    public aplicacion: Application;
    
    constructor(){
        this.aplicacion= express();
        this.configuracion();
        this.rutas();
    }
    public configuracion(){
        this.aplicacion.set('port', process.env.PORT || 3003);
        this.aplicacion.use(morgan('dev'));
        this.aplicacion.use(cors()); // comunicación entre angular y servidor
        this.aplicacion.use(express.json()); // recibir la información de json que recibamos de angular
        this.aplicacion.use(express.urlencoded({extended: false})); // para recibir información de formulario
    }
    
    public rutas(){
        this.aplicacion.use('/', rutas);
        this.aplicacion.use('/libreria',libros);
        this.aplicacion.use('/administrador', user);
    }
    
    public start(){
        this.aplicacion.listen(this.aplicacion.get('port'), ()=> {
            console.log('servidor lanzado en', this.aplicacion.get('port'));
        });
    }

}

const servidor = new Servidor();
servidor.start();