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

  listaFoto
  constructor(private service: FotoService) {
    this.listaFoto = service.listar();
  }

  ngOnInit() {
  }

  apagar(foto: FotoComponent) {
    this.service.deletar(foto)
      .subscribe(() => {
        
      }, erro => { });;
  }

}
