/**
 * Created by hunter_s70 on 25.09.2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'modal-comp',
    template: `<h2>Добро пожаловать {{name}}!</h2>`,
    styles: [`h2, p {color:red;}`]
})
export class ModalComponent {
    name= "Евгений";
}