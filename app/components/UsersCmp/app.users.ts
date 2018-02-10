/**
 * Created by hunter_s70 on 07.02.2018.
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../User';

@Component({
    selector: 'app-users',
    templateUrl: './app/components/UsersCmp/tmp/users_list.html',
})
export class UsersComponent {
    items: User[] =
        [
            {id: 6545, name: "Иван", date: "15.09", email: "bem@mail.ru", phone: 24533267, position: "Front-end" },
            {id: 6546, name: "Антон", date: "6.10", email: "bem@mail.ru", phone: 24533267, position: "Front-end" },
            {id: 6547, name: "Стас", date: "22.06", email: "bem@mail.ru", phone: 24533267, position: "Front-end" },
            {id: 6548, name: "Димас", date: "3.10", email: "bem@mail.ru", phone: 24533267, position: "Front-end" }
        ];

    empForm : FormGroup;

    constructor() {
        this.empForm = new FormGroup({

            'empName': new FormControl('', [
                Validators.required,
                Validators.pattern('[a-zA-Zа-яА-Я]{2,13}')
            ]),
            'empEmail': new FormControl('', [
                Validators.required,
                Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
            ]),
            'empPhone': new FormControl('', [
                Validators.required,
                Validators.pattern('[0-9]{4,11}')
            ]),
            'empDate': new FormControl('', [
                Validators.required
            ]),
            'empPosition': new FormControl('', [
                Validators.required,
                Validators.pattern('[a-zA-Zа-яА-Я]{2,13}')
            ]),
        });
    }

    addItem(text: string, email: string, phone: number, date: string, position: string): void {

        if(text == null || text == undefined || text.trim() == "") {
            return;
        }

        if(phone == null || phone == undefined) {
            return;
        }

        let thisId = (() => {
            let maxId = 0;
            this.items.forEach(function(item) {
                if (item.id > maxId) maxId = item.id;
            });
            return maxId + 1;
        })();

        this.items.push(new User(thisId, text, email, phone, date, position));
    }

    delItem(id: number): void {
        if(id == null || id == undefined) {
            return;
        }

        this.items.forEach(function(item, i, items) {
            if(item.id === id) {
                items.splice(i, 1);
            }
        });
    }

    onModalChanged(data: any):void {
        this.items.forEach(function(item, i, items) {
            if (item.id === data.id) {
                // refresh current Item
                items.splice(i, 1, data);
            }
        });
    }
}