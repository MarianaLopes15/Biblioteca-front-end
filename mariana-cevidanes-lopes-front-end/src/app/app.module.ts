import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { ListarAutoresComponent } from './listar-autores/listar-autores.component';
import { HomeComponent } from './home/home.component';
import { FormularioAutoresComponent } from './formulario-autores/formulario-autores.component';
import { FormularioLivrosComponent } from './formulario-livros/formulario-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAutoresComponent,
    ListarLivrosComponent,
    HomeComponent,
    FormularioLivrosComponent,
    FormularioAutoresComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
