import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profissao } from '../models/profissao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfissaoService {

  constructor(private http: HttpClient) { }

  profissaoUrl: string = 'https://localhost:44381/api/Profissao';
  listaProfissao: Profissao[] = [];

  buscarProfissoes():Observable<Profissao[]>{
    return this.http.get<Profissao[]>(this.profissaoUrl);
  }
}
