import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Autores } from '../models/autor';
import { AutorServiceService } from '../services/autor-service.service';

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.css']
})
export class ListarAutoresComponent implements OnInit {
  autores: Autores[] = [];

  erroListaAutor: string ='';

  constructor(private TitleService:Title,
    private autorService: AutorServiceService) {this.TitleService.setTitle('Autores'); }

  ngOnInit(): void {
    this.listarAutores();
  }

  listarAutores() {
    this.autorService.listarAutores().subscribe(successData => {
      this.autores = successData
    }, error=> {
      this.erroListaAutor = "Ocorreu um erro ao buscar os livros"
      }
    );
  }

}
