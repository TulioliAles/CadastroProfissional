import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empregado } from '../models/empregado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

  constructor(private http:HttpClient) { }

  empregadoUrl: string = 'https://localhost:44381/api/Empregado';
  listaEmpregado: Empregado[] = [];
  empregadoDados: Empregado = new Empregado();

  salvarEmpregado(){
    return this.http.post(this.empregadoUrl, this.empregadoDados);
  }

  atualizarEmpregado(){
    return this.http.put(`${this.empregadoUrl}/${this.empregadoDados.id}`, this.empregadoDados);
  }

  buscarEmpregados():Observable<Empregado[]>{
    return this.http.get<Empregado[]>(this.empregadoUrl);
  }

  deletarEmpregado(id:number){
    return this.http.delete(`${this.empregadoUrl}/${id}`);
  }
}
