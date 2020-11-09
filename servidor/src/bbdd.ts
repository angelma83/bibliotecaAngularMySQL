import mysql from 'mysql';

// establezco la conexión. 
import infobbdd from './infobbdd';

const conexion = mysql.createConnection(infobbdd.bbdd);

conexion.connect((error, connection) => {
    if(error) throw error;
    console.log('conectado a BBDD');
});

export default conexion;
