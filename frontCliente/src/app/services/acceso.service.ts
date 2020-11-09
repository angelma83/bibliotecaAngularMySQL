import { Injectable } from '@angular/core';

// para poder hacer instancias http
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../modeloUsuario';
import {Token} from '../modeloToken';

// import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  url_user = 'http://localhost:3003';
  private token:string;

  constructor(private http:HttpClient) { }

  public compruebaAcceso(user:string){
    return this.http.post(`${this.url_user}/administrador`, user);
  }

  
  public logOut(){
    this.token = '';
    localStorage.removeItem('acceso');
    localStorage.removeItem('time');

  }

  public guardarToken(token:string, time:string){
    localStorage.setItem('acceso', token);
    localStorage.setItem('time', time);
    this.token=token;
  }

}
