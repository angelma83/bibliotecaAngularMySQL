import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// incluir distinta rutas en mi app
import { RouterModule, Routes } from '@angular/router';

// importar para dar funcionabilidad a los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// los componnentes se importar por defecto
import { AppComponent } from './app.component';
import { MenuComponent } from './componentesPropios/menu/menu.component';
import { FormularioComponent } from './componentesPropios/formulario/formulario.component';
import { ListadoLibrosComponent } from './componentesPropios/listado-libros/listado-libros.component'; 
import {AccesoBackComponent} from './componentesPropios/acceso-back/acceso-back.component'

// importo los servicios y lo añado en providers, npm cache verify
import {HttpClientModule} from '@angular/common/http'
import {LibreriaService} from './services/libreria.service';
import {AccesoService} from './services/acceso.service';

const urls:Routes = [
  {path: 'contacto', component: FormularioComponent}, 
  {path: 'libreria', component: ListadoLibrosComponent},
  {path: 'administracion', component: AccesoBackComponent},
  {path:'**', redirectTo: '/', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormularioComponent,
    ListadoLibrosComponent,
    AccesoBackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(urls) // si lo hiciera desde fichero externo entonces, importar el nombre del elemento donde creo la ruta
  ],
  providers: [
    LibreriaService, 
    AccesoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
