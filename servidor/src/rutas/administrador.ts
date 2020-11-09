import {Router} from 'express';

import controladorAdmin  from '../controlador/controladorAdmin';

class Administrador {

    public rutas: Router = Router();
     
    constructor(){
        this.config();
    }
    
    public config(): void{
        this.rutas.get('/', controladorAdmin.mostrar); 
        this.rutas.post('/', controladorAdmin.obtener);
    }
}

const admin = new Administrador();
export default admin.rutas;