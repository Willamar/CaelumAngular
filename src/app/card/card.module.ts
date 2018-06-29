import { FotoModule } from './../foto/foto.module';
import { CardComponent } from './card.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [FotoModule]
})
export class CardModule{

}