import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpregadoService } from 'src/app/services/empregado.service';
import { ProfissaoService } from 'src/app/services/profissao.service';

@Component({
  selector: 'app-empregado-formulario',
  templateUrl: './empregado-formulario.component.html',
  styleUrls: ['./empregado-formulario.component.css']
})
export class EmpregadoFormularioComponent implements OnInit {

  constructor(public empService : EmpregadoService, public profService : ProfissaoService) { }

  ngOnInit(): void {
    this.profService.buscarProfissoes().subscribe(data => {
      this.profService.listaProfissao = data;
    });
  }

  submit(form: NgForm){
    console.log("Evento funcionando!");
  }

  insereEmpregado(){

  }

  atualizaEmpregado(){

  }

  resetForm(){

  }
}
