import {Router} from 'express';

import {controladorIndex} from '../controlador/controladorIndex';

class Index {

    public rutas: Router = Router();
    
    constructor(){
        this.config();

    }
    public config(): void{
        this.rutas.get('/', controladorIndex.iniciacion);

    }
}

const index = new Index();
export default index.rutas;