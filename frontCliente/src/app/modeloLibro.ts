// si alguna columna de mi bbdd de datos fuera opcional, entonces tengo que marcar el campo como id?: 
export interface Libro{

    id: number;
    titulo: string;
    autor: string;
    categoria: string; 
    descripcion: string; 
    imagen: string;

}