import { FotoService } from './../services/foto.services';
import { MensagemComponent } from './../mensagem/mensagem.component';
import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto = new FotoComponent;
  mensagem = new MensagemComponent();

  constructor(
    private service: FotoService,
    private rotaAtiva: ActivatedRoute,
    private roteador: Router) {


    //snapshot
    let fotoId = this.rotaAtiva.snapshot.params.fotoId;
    if (fotoId) {
      this.service.pesquisar(fotoId).subscribe(
        (fotoApi) => this.foto = fotoApi
      );
    }

    // this.rotaAtiva.params.subscribe((parametroRota) => {
    //   this.service.pesquisar(parametroRota.fotoId).subscribe(
    //     (fotoApi) => this.foto = fotoApi
    //   );
    // });
  }

  ngOnInit() {
  }

  salvar() {

    if (this.foto._id) {
      this.service.alterar(this.foto).subscribe(
        () => {
          this.mensagem.texto = `${this.foto.titulo} alterado com sucesso`;
          this.mensagem.tipo = "success";

          setTimeout(() => {
            this.roteador.navigate([""]);
          }, 3000);

        },
        erro => {
          this.apresentarErroMensagem(erro);
        })
    } else {
      this.service.cadastrar(this.foto)
        .subscribe(
          () => {
            this.mensagem.texto = `${this.foto.titulo} Cadastrado com sucesso`;
            this.mensagem.tipo = "success";
          },
          erro => {
            this.apresentarErroMensagem(erro);
          }
        )
    }
  }

  apresentarErroMensagem(erro) {
    this.mensagem.texto = "Ops algo deu errado, tente novamente mais tarde!";
    this.mensagem.tipo = "danger";
    console.log(erro);
  }
}
