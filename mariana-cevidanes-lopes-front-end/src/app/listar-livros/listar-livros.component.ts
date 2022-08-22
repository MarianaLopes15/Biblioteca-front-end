import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Autores } from '../models/autor';
import { Livros } from '../models/livro';
import { LivroServiceService } from '../services/livro-service.service';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {
  autores: Autores[] = [];
  livros: Livros[] = [];

  erroListaLivro: string ='';
  erroDeletarLivro: string ='';
  sucessoDeletarLivro: string ='';

  constructor(private livrosService: LivroServiceService, private snackBar: MatSnackBar,
    private TitleService:Title) {this.TitleService.setTitle('Livros');}

  ngOnInit(): void {
    this.listarLivros();
  }
  listarLivros() {
    this.livrosService.listarLivros().subscribe(successData => {
      this.livros = successData
    }, error=> {
      this.snackBar.open("Ocorreu um erro ao buscar os livros", "", {duration: 5000});
      }
    );

  }

  solicitacaoRemocaoLivro(livro: Livros) {
    let text = "Deseja remover: " + livro.titulo
    console.log(livro.id)
    if(confirm(text) == true) {
      this.livrosService.deletar(livro.id).subscribe(successData => {
        this.snackBar.open("Livro " + livro.titulo + " removido com sucesso", "", {duration: 5000});
        this.listarLivros();
      }, error=> {
        this.snackBar.open("Ocorreu um erro ao deletar o livro"+ livro.titulo, "", {duration: 5000});

        }
      );
    }
  }
}
