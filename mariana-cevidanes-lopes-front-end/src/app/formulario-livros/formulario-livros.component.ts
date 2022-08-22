import { AutorServiceService } from './../services/autor-service.service';
import { Livros } from './../models/livro';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroServiceService } from '../services/livro-service.service';
import { Autores } from '../models/autor';

@Component({
  selector: 'app-formulario-livros',
  templateUrl: './formulario-livros.component.html',
  styleUrls: ['./formulario-livros.component.css']
})
export class FormularioLivrosComponent implements OnInit {

  autores: Autores[] = [];
  form = this.formBuilder.group({
    id: [''],
    titulo:[''],
    anoLancamento: ['']
  });;

  constructor(private autoresService: AutorServiceService, private formBuilder: UntypedFormBuilder, private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar , private livrosService: LivroServiceService, private TitleService:Title) {this.TitleService.setTitle('Formulario Livro');


   }

  ngOnInit(): void {
    const livros: Livros = this.route.snapshot.data['livros'];
    this.form.setValue({
      id: livros.id,
      name: livros.titulo,
      category: livros.anoLancamento
    });

    this.autoresService.listarAutores().subscribe({
      next: todosOsAutores => {
        this.autores = todosOsAutores as Autores[];
      }
    });

  }
  onSubmit() {
    this.livrosService.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.router.navigate(['listar-livros']);
  }

  private onSuccess() {
    this.snackBar.open("Livro cadastrado com sucesso.", "", {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open("Erro ao salvar livro.", "", {duration: 5000});
  }

}
