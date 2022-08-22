import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Autores } from '../models/autor';

const APIURL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class AutorServiceService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  listarAutores() : Observable<any>{
    return this.httpClient.get(`${APIURL}/autores`).pipe(map(resultado => {
      return resultado as Autores[];
    }));
  }

  save(record: Autores){
    return this.httpClient.post(`${APIURL}/autores`, record)
  }
}
