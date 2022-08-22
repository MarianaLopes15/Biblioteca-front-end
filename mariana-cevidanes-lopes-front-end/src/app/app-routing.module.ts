import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAutoresComponent } from './formulario-autores/formulario-autores.component';
import { FormularioLivrosComponent } from './formulario-livros/formulario-livros.component';
import { HomeComponent } from './home/home.component';
import { ListarAutoresComponent } from './listar-autores/listar-autores.component';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'listar-autores',
    component: ListarAutoresComponent,
  },
  {
    path: 'listar-livros',
    component: ListarLivrosComponent
  },
  {
    path: 'formulario-autores',
    component: FormularioAutoresComponent,
  },
  {
    path: 'formulario-livros',
    component: FormularioLivrosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
