import {Request, Response} from 'express';

import db from '../bbdd';

class ControladorLibros{

    public async mostrar(req:Request, res:Response){
        // recibimos los datos por req.body
        await db.query('SELECT * FROM libros',(error, libros, fields)=> {
            res.json(libros);
        });
    }

    public async filtrarLibros(req:Request, res:Response){
        const {id}= req.params; // const id= req.params.id
        await db.query('SELECT * FROM libros WHERE id=?', [id] ,(error, libro, fields)=> {
            res.json(libro);
        });
    }

    public async create(req: Request, res: Response){
        await db.query('INSERT INTO libros set ?', [req.body]);
        res.json({text: 'Guardo juego'});
    }

    public async delete(req:Request, res:Response){
        const id = req.params.id;

        await db.query('DELETE FROM libros WHERE id=?', [id]);
        res.json({text: 'eliminando libro'+ typeof(id)+ req.params.id});
    }

    public async actualizar(req:Request, res:Response){
        const id = req.params.id;
        const titulo = req.body.titulo;
        const autor = req.body.autor;
        const categoria = req.body.categoria;
        const descripcion = req.body.descripcion;
        const imagen = req.body.imagen;

        await db.query('UPDATE libros SET titulo= ?, autor=?, categoria=?, descripcion=?, imagen=? WHERE id=?', 
        [titulo, autor, categoria,descripcion, imagen, id])
        res.json({text: 'actualización de libro'+ req.body});
    }
}

const controladorLibros = new ControladorLibros();
export default controladorLibros;