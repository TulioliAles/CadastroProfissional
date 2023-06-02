import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../services/empregado.service';
import { Empregado } from '../models/empregado.model';

@Component({
  selector: 'app-empregado-detalhes',
  templateUrl: './empregado-detalhes.component.html',
  styleUrls: ['./empregado-detalhes.component.css']
})
export class EmpregadoDetalhesComponent implements OnInit {

  constructor(public empService : EmpregadoService) { }

  ngOnInit(): void {
    this.empService.buscarEmpregados().subscribe(dados => {
      this.empService.listaEmpregado = dados;
    });
  }

  editaEmpregado(selecionaEmpregado: Empregado){
    console.log(selecionaEmpregado);
    this.empService.empregadoDados = selecionaEmpregado;
  }

  apagarEmpregado(id: number){
    if(confirm('Quer realmente apagar esse registro?')){
      this.empService.deletarEmpregado(id).subscribe(dado => {
        console.log('Registro apagado...');
        this.empService.buscarEmpregados().subscribe(dado => {
          this.empService.listaEmpregado = dado;
      },
      err => {
        console.log('Registro não apagado...');
      });
      }
    )}
  }
}
