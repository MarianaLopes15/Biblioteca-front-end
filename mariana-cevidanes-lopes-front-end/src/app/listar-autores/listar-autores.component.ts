import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private TitleService:Title, private snackBar: MatSnackBar,
    private autorService: AutorServiceService) {this.TitleService.setTitle('Autores'); }

  ngOnInit(): void {
    this.listarAutores();
  }

  listarAutores() {
    this.autorService.listarAutores().subscribe(successData => {
      this.autores = successData
    }, error=> {
      this.snackBar.open("Ocorreu um erro ao buscar os autores", "", {duration: 5000});
      }
    );
  }

}
