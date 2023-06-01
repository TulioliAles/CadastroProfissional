import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpregadoDetalhesComponent } from './empregado-detalhes/empregado-detalhes.component';
import { EmpregadoFormularioComponent } from './empregado-detalhes/empregado-formulario/empregado-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpregadoDetalhesComponent,
    EmpregadoFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
