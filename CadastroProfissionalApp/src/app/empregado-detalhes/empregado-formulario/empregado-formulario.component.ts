import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from 'src/app/services/empregado.service';

@Component({
  selector: 'app-empregado-formulario',
  templateUrl: './empregado-formulario.component.html',
  styleUrls: ['./empregado-formulario.component.css']
})
export class EmpregadoFormularioComponent implements OnInit {

  constructor(public empService : EmpregadoService) { }

  ngOnInit(): void {
  }

}
