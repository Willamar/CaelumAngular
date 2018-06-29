import { MensagemComponent } from './../mensagem/mensagem.component';
import { Observable } from 'rxjs';
import { FotoComponent } from './../foto/foto.component';
import { FotoService } from './../services/foto.services';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  title = "CaelumPic"

  listaFoto: FotoComponent[];
  mensagem = new MensagemComponent();
  constructor(private service: FotoService) {
    service.listar().subscribe(
      fotosApi => this.listaFoto = fotosApi
    );
  }

  ngOnInit() {
  }

  apagar(foto: FotoComponent) {
    this.service.deletar(foto)
      .subscribe(() => {
        this.listaFoto = this.listaFoto.filter((item) => item !== foto);
        this.mensagem.texto = `${foto.titulo}, apagado com sucesso!`
        this.mensagem.tipo = "success";
      }, erro => { 
        this.mensagem.texto = `Ops, ocorreu um erro!`
        this.mensagem.tipo = "danger";
      });;
  }

}
