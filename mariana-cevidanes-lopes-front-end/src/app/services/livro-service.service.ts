import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livros } from '../models/livro';
import { AutorServiceService } from './autor-service.service';

const APIURL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class LivroServiceService {

  constructor(private httpClient: HttpClient,
    private autorServiceService: AutorServiceService) { }

  listarLivros(){
    return this.httpClient.get(`${APIURL}/livros`).pipe(map(resultado => {
      return resultado as Livros[];
    }))
  }

  deletar(id: number) : Observable<void>{
    return this.httpClient.delete<void>(`${APIURL}/livros/${id}`);
  }

  save(record: Livros){
    return this.httpClient.post(`${APIURL}/livros/criaLivro`, record)
  }
}
