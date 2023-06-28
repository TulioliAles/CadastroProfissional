import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empregado } from 'src/app/models/empregado.model';
import { EmpregadoService } from 'src/app/services/empregado.service';
import { ProfissaoService } from 'src/app/services/profissao.service';

@Component({
  selector: 'app-empregado-formulario',
  templateUrl: './empregado-formulario.component.html',
  styleUrls: ['./empregado-formulario.component.css']
})
export class EmpregadoFormularioComponent implements OnInit {

  constructor(public empService : EmpregadoService, public profService : ProfissaoService) { }

  @ViewChild('checkbox1') checkBox: ElementRef;
  isSlide: string = 'off';

  ngOnInit(): void {
    this.profService.buscarProfissoes().subscribe(data => {
      this.profService.listaProfissao = data;
    });
  }

  submit(form: NgForm){
    this.empService.empregadoDados.casado = form.value.casado == true ? 1 : 0;
    this.empService.empregadoDados.ativo = form.value.ativo == true ? 1 : 0;

    if(this.empService.empregadoDados.id == 0)
      this.insereEmpregado(form);
    else
      this.atualizaEmpregado(form);
  }

  insereEmpregado(myForm: NgForm){
    this.empService.salvarEmpregado().subscribe(d => {
      this.resetForm(myForm);
      this.refreshDados();
    });
  }

  atualizaEmpregado(myForm: NgForm){
    this.empService.atualizarEmpregado().subscribe(d => {
      this.resetForm(myForm);
      this.refreshDados();
    });
  }

  resetForm(myForm: NgForm){
    myForm.form.reset(myForm.value);
    this.empService.empregadoDados = new Empregado();
    this.hideShowSlide();
  }

  refreshDados(){
    this.empService.buscarEmpregados().subscribe(res => {
        this.empService.listaEmpregado = res;
      });
  }

  hideShowSlide(){
    if(this.checkBox.nativeElement.checked){
      this.checkBox.nativeElement.checked = false;
      this.isSlide = 'off';
    }
    else{
      this.checkBox.nativeElement.checked = true;
      this.isSlide = 'on';
    }
  }
}
