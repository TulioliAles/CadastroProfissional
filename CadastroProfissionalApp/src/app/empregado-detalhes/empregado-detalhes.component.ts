import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../services/empregado.service';

@Component({
  selector: 'app-empregado-detalhes',
  templateUrl: './empregado-detalhes.component.html',
  styleUrls: ['./empregado-detalhes.component.css']
})
export class EmpregadoDetalhesComponent implements OnInit {

  constructor(public empService:EmpregadoService) { }

  ngOnInit(): void {
    this.empService.buscarEmpregados().subscribe(dados => {
      this.empService.listaEmpregado = dados;
    });
  }

}
