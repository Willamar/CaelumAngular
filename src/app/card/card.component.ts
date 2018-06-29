import { FotoComponent } from './../foto/foto.component';
import { Component, Input } from "@angular/core";


@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styles: []
})
export class CardComponent{
    @Input() foto: FotoComponent
}