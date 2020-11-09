import { Injectable } from '@angular/core';

// para poder hacer instancias http
import {HttpClient} from '@angular/common/http';
import { Libro} from '../modeloLibro'

// import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  url_libros = 'http://localhost:3003';

  constructor(private http:HttpClient) { }

 public obtenLibros(){
    return this.http.get(`${this.url_libros}/libreria`);
  }

  public filtraLibros(id:string){
    return this.http.get(`${this.url_libros}/libreria/${id}`);
  }

  public guardaLibro(libro:Libro){
    return this.http.post(`${this.url_libros}/libreria/`, libro);
  }
  
  public borraLibros(id:string){
    return this.http.delete(`${this.url_libros}/libreria/${id}`);
  }


  // Observable que : Observable <libro> actualizaLibros (id: string, libro: Libro): Observable<Libro>{}
  actualizaLibros(id, libro){
    return this.http.put(`${this.url_libros}/libreria/${id}`, libro);
  }

}
