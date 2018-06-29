import { FotoComponent } from './../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { resolveDirective } from '@angular/core/src/render3/instructions';

const base_url = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class FotoService {

    private url = `${base_url}v1/fotos/`
    private cabecalho = {
        headers: new HttpHeaders({ "Context-Type": "application/json" })
    }
    constructor(private service: HttpClient) { }

    listar(): Observable<FotoComponent[]> {
        return this.service.get<FotoComponent[]>(this.url);
    }
    cadastrar(foto: FotoComponent): Observable<Object> {
        return this.service.post(this.url, foto, this.cabecalho);
    }
    deletar(foto: FotoComponent): Observable<Object> {
        return this.service.delete(this.url + foto._id);
        
    }
    alterar() { }
    pesquisar() { }
}