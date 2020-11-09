import {Router} from 'express';
import controladorLibros  from '../controlador/controladorLibros';

class Libros {

    public rutas: Router = Router();
    
    constructor(){
        this.config();
    }
    
    public config(): void{
        this.rutas.get('/', controladorLibros.mostrar);
        this.rutas.get('/:id', controladorLibros.filtrarLibros);
        this.rutas.post('/', controladorLibros.create);
        this.rutas.delete('/:id', controladorLibros.delete);
        this.rutas.put('/:id', controladorLibros.actualizar);
    }
}

const libros = new Libros();
export default libros.rutas;