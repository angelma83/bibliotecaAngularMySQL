import {Request, Response} from 'express';

import JsonWebTokenError from 'jsonwebtoken';


import db from '../bbdd';

class ControladorAdmin{

    public async mostrar(req: Request, res: Response){
        await db.query('SELECT * FROM user',(error, libros, fields)=> {
            res.json(libros);
        });
    }

    public async obtener(req:Request, res:Response){
    
        const nombre = req.body.nombre;
        const pass = req.body.passw;
    

        // recibimos los datos por req.body
     
        await db.query('SELECT * FROM user WHERE nombre=?',[nombre], (error, user, fields)=> {
            
          if(user.length == 0) return res.status(401).send('Nombre incorrecto');

          if(user[0].pass !== pass) return res.status(401).send('pass incorrecto');
          const token = JsonWebTokenError.sign({id: req.body.id}, 'clave');
          return res.status(200).json({token});

        });

    }

}

const controladorAdmin = new ControladorAdmin();
export default controladorAdmin;