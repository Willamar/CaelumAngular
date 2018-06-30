import { FotoComponent } from './../foto/foto.component';
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: "filtroPorTitulo"
})
export class FiltroPorTitulo implements PipeTransform {

    transform(listaFotos: FotoComponent[], titulo: string) {
        console.log(titulo);
        if (titulo) {
            return listaFotos.filter((item) => {
                return item.titulo.toLocaleLowerCase().includes(titulo.toLocaleLowerCase());
            });;
        } else {
            return listaFotos;
        }

    }
}
