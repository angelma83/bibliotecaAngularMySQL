import { Component, OnInit } from '@angular/core';

import {LibreriaService} from '../../services/libreria.service';
import {Libro} from '../../modeloLibro';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {

  libros: any = []

  constructor(private libreria: LibreriaService) { }

  ngOnInit(): void {

    this.libreria.obtenLibros().subscribe(
      res => {
        this.libros = res;
      },
      err => console.log(err)
    );
  
  
  }



}
