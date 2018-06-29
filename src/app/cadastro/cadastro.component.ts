import { FotoService } from './../services/foto.services';
import { MensagemComponent } from './../mensagem/mensagem.component';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto = new FotoComponent;
  mensagem = new MensagemComponent();

  constructor(private service: FotoService) {}

  ngOnInit() {
  }

  salvar() {
    this.service.cadastrar(this.foto)
      .subscribe(
        () => { 
          this.mensagem.texto = `${this.foto.titulo} Cadastrado com sucesso`;
          this.mensagem.tipo = "success";
        },
        erro => {
          this.mensagem.texto = "Ops deu errado, tente novamente mais tarde!";
          this.mensagem.tipo = "danger";
          console.log(erro);            
        }       
      )
  }

}
