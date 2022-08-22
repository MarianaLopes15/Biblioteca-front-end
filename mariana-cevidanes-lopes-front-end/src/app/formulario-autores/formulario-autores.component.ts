import { Autores } from './../models/autor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorServiceService } from '../services/autor-service.service';

@Component({
  selector: 'app-formulario-autores',
  templateUrl: './formulario-autores.component.html',
  styleUrls: ['./formulario-autores.component.css']
})
export class FormularioAutoresComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar, private autoresService: AutorServiceService, private TitleService:Title) {this.TitleService.setTitle('Formulario Autor');

  this.form = this.formBuilder.group({
    id: [''],
    nome:[''],
    biografia: ['']
  });

 }

  ngOnInit(): void {
    const autores: Autores = this.route.snapshot.data['autores'];
    this.form.setValue({
      _id: autores.id,
      name: autores.nome,
      category: autores.biografia
    });
  }

  onSubmit() {
    this.autoresService.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.router.navigate(['listar-autores']);
  }

  private onSuccess() {
    this.snackBar.open("Autor cadastrado com sucesso.", "", {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open("Erro ao salvar autor.", "", {duration: 5000});
  }
}
