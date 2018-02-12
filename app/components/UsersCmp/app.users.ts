/**
 * Created by hunter_s70 on 07.02.2018.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../User';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-users',
    templateUrl: './app/components/UsersCmp/tmp/users_list.html',
    providers: [UserService]
})
export class UsersComponent implements OnInit {
    items: User[] = [];
    empForm : FormGroup;
    error: any;

    constructor(private userService: UserService) {
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

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.userService
            .getUsers()
            .then(data => this.items = data)
            .catch(error => this.error = error);
    }

    addItem(): void {
        let formData = this.empForm.value;

        let thisId = (() => {
            let maxId = 0;
            this.items.forEach(function(item) {
                if (item.id > maxId) maxId = item.id;
            });
            return maxId + 1;
        })();

        this.userService
            .saveUser({
                id: thisId,
                name: formData.empName,
                date: formData.empDate,
                email: formData.empEmail,
                phone: formData.empPhone,
                position: formData.empPosition
            })
            .then(() => { this.getUsers() })
            .catch(error => this.error = error);
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
        this.items.forEach((item, i, items) => {
            if (item.id === data.id) {
                // refresh current Item
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        item[key] = data[key];
                    }
                }
                // refresh server data
                this.userService
                    .updateUser(items[i])
                    .then(() => { this.getUsers() })
                    .catch(error => this.error = error);
            }
        });
    }
}