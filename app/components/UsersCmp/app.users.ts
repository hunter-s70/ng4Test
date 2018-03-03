/**
 * Created by hunter_s70 on 07.02.2018.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../User';
import { UserService } from '../../user.service';
import {PageEvent} from '@angular/material';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'app-users',
    templateUrl: './app/components/UsersCmp/tmp/users_list.html',
    styleUrls: ['./app/components/UsersCmp/tmp/styles/app.users.css'],
    providers: [UserService]
})
export class UsersComponent implements OnInit {
    items: User[] = [];
    onePageItems: User[] = [];
    empForm : FormGroup;
    dafaultAvatar: string;
    error: any;

    // MatPaginator Output
    pageEvent: PageEvent;
    itemsOnPage = 5;

    constructor(private userService: UserService, private router: Router) {
        this.dafaultAvatar = 'assets/img/avatar.jpeg';
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
            .then((data) => {
                this.items = data;
                this.setPaginationItems();
            })
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
                date: moment(formData.empDate).format('M/D/YYYY'),
                email: formData.empEmail,
                phone: formData.empPhone,
                position: formData.empPosition
            })
            .then(() => { this.getUsers() })
            .catch(error => this.error = error);
    }

    delItem(user: User): void {
        if(user.id == null || user.id == undefined) {
            return;
        }

        this.userService
            .deleteUser(user)
            .then(() => { this.getUsers() })
            .catch(error => this.error = error);
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

    viewItemDetails(user: User):void {
        if(user.id == null || user.id == undefined) {
            return;
        }

        this.router.navigate([`/users/${user.id}`]);
    }

    changePage(event: any):void {
        this.pageEvent = event;
        this.setPaginationItems();
    }

    setPaginationItems() {
        const pageIndex = this.pageEvent ? this.pageEvent.pageIndex : 0,
              pageSize = this.pageEvent ? this.pageEvent.pageSize : this.itemsOnPage,
              from = this.pageEvent ? pageIndex * pageSize : 0,
              to = this.pageEvent ? (pageIndex + 1) * pageSize : this.itemsOnPage;

        this.onePageItems = this.items.slice(from, to);
    }

    getAvatar(avatar: string):string {
        return avatar ? avatar : this.dafaultAvatar;
    }
}