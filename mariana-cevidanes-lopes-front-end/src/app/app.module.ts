import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { ListarAutoresComponent } from './listar-autores/listar-autores.component';
import { HomeComponent } from './home/home.component';
import { FormularioAutoresComponent } from './formulario-autores/formulario-autores.component';
import { FormularioLivrosComponent } from './formulario-livros/formulario-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarLivrosComponent,
    ListarAutoresComponent,
    HomeComponent,
    FormularioAutoresComponent,
    FormularioLivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
