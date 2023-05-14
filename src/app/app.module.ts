import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLoginComponent } from './login/card-login/card-login.component';
import { LoginComponent } from './login/login.component';
import { TelaAdmComponent } from './tela-adm/tela-adm.component';
import { CardEmpresasComponent } from './tela-adm/card-empresas/card-empresas.component';
import { CsvExcelComponent } from './tela-adm/card-empresas/csv-excel/csv-excel.component';
import { BuscaEmpresaComponent } from './tela-adm/card-empresas/busca-empresa/busca-empresa.component';
import { ButtonCadastrarEmpresaComponent } from './tela-adm/card-empresas/button-cadastrar-empresa/button-cadastrar-empresa.component';
import { PerfilSairComponent } from './tela-adm/perfil-sair/perfil-sair.component';
import { TabelaEmpresasComponent } from './tela-adm/card-empresas/tabela-empresas/tabela-empresas.component';
import { SideBarComponent } from './tela-adm/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardLoginComponent,
    LoginComponent,
    TelaAdmComponent,
    CardEmpresasComponent,
    CsvExcelComponent,
    BuscaEmpresaComponent,
    ButtonCadastrarEmpresaComponent,
    PerfilSairComponent,
    TabelaEmpresasComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
