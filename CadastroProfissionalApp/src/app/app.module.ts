import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpregadoDetalhesComponent } from './empregado-detalhes/empregado-detalhes.component';
import { EmpregadoFormularioComponent } from './empregado-detalhes/empregado-formulario/empregado-formulario.component';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmpregadoDetalhesComponent,
    EmpregadoFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
