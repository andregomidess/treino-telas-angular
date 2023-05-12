import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLoginComponent } from './login/card-login/card-login.component';
import { LoginComponent } from './login/login.component';
import { TelaAdmComponent } from './tela-adm/tela-adm.component';
import { CardEmpresasComponent } from './tela-adm/card-empresas/card-empresas.component';

@NgModule({
  declarations: [
    AppComponent,
    CardLoginComponent,
    LoginComponent,
    TelaAdmComponent,
    CardEmpresasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
