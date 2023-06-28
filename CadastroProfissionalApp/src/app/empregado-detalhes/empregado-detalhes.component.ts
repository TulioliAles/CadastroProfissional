import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpregadoService } from '../services/empregado.service';
import { Empregado } from '../models/empregado.model';
import { DatePipe } from '@angular/common';
import { EmpregadoFormularioComponent } from './empregado-formulario/empregado-formulario.component';

@Component({
  selector: 'app-empregado-detalhes',
  templateUrl: './empregado-detalhes.component.html',
  styleUrls: ['./empregado-detalhes.component.css']
})
export class EmpregadoDetalhesComponent implements OnInit {

  constructor(public empService : EmpregadoService, public datePipe: DatePipe) { }

  @ViewChild(EmpregadoFormularioComponent) emp: EmpregadoFormularioComponent;

  ngOnInit(): void {
    this.empService.buscarEmpregados().subscribe(dados => {
      this.empService.listaEmpregado = dados;
    });
  }

  editaEmpregado(selecionaEmpregado: Empregado){
    let df = this.datePipe.transform(selecionaEmpregado.dataAdmissao, 'yyyy-MM-dd')
    selecionaEmpregado.dataAdmissao = df;

    this.empService.empregadoDados = selecionaEmpregado;

    if(this.emp.isSlide === 'off'){
      this.emp.hideShowSlide();
    }
  }

  apagarEmpregado(id: number){
    if(confirm('Quer realmente apagar esse registro?')){
      this.empService.deletarEmpregado(id).subscribe(dado => {
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
