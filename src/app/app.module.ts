import { FiltroPorTitulo } from './listagem/filtroPorTitulo.pipe';
import { FotoModule } from './foto/foto.module';
import { CardModule } from './card/card.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ModuloRoteamento } from './app.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemComponent } from './mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    MensagemComponent,
    FiltroPorTitulo
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CardModule,
    FotoModule,
    ModuloRoteamento,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
