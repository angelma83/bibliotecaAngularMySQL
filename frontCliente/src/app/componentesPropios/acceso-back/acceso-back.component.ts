import { Component, OnInit } from '@angular/core';

import { Libro } from 'src/app/modeloLibro';
import { LibreriaService } from 'src/app/services/libreria.service';
import {AccesoService} from '../../services/acceso.service';

@Component({
  selector: 'app-acceso-back',
  templateUrl: './acceso-back.component.html',
  styleUrls: ['./acceso-back.component.css']
})

export class AccesoBackComponent implements OnInit {

  libros: any; 
  public mostrar:boolean = true;
  user: any = {
    nombre: '',
    passw:''
  }

  libro: Libro= {
    id:0,
    autor:'',
    titulo: '',
    categoria:'',
    descripcion: '',
    imagen: ''
  };

  modificoLibro:Libro= {
    id:0,
    autor:'',
    titulo: '',
    categoria:'',
    descripcion: '',
    imagen: ''
  };

  constructor(private servicioLibreria:LibreriaService, private servicioAcceso:AccesoService) { }

  ngOnInit(): void {
    this.muestraLibros();
    this.comprueboLogin();
  }

  public comprueboUser(){
  
    this.servicioAcceso.compruebaAcceso(this.user).subscribe(
      res=> {
       localStorage.setItem('token',res['token']);
       if(res['token'] !== null){
        this.mostrar=false;
      }else {
        alert(res);
      }
      },
      error =>alert(error.error)
    );
  //  this.mostrar=false;
  }

  public comprueboLogin(){
    if(localStorage.getItem('token')){
      this.mostrar=false;
      
    }else {
      this.mostrar=true;
    }
  }
 
  public salgoBack(){
    localStorage.removeItem('token');
    this.mostrar=true;
  }

  public guardarLibro(){
    this.servicioLibreria.guardaLibro(this.libro).subscribe(
      res => { this.muestraLibros()
       },
      error => console.log(error)
    );
    this.libro = {
      id:0,
      autor:'',
      titulo: '',
      categoria:'',
      descripcion: '',
      imagen: ''
    }
  }

  public borrarLibro(id:string){
    this.servicioLibreria.borraLibros(id).subscribe(
      res => {console.log(res);
      this.muestraLibros();},
      error => console.log(error)
    );
  }

  public cargoValoresLibro(libro:any){
   
    this.modificoLibro=libro;
    
  }

  public actualizaLibro(){
       
    this.servicioLibreria.actualizaLibros(this.modificoLibro.id, this.modificoLibro).subscribe(
      res=>{this.muestraLibros()},
      error => console.log(error)
    );
  }

  public muestraLibros(){
    this.servicioLibreria.obtenLibros().subscribe(
      res=>{this.libros = res},
      error =>console.log(error)
    )
  }
}
