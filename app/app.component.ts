import { Component } from '@angular/core';
     
export class Item{
	id: number; 
    name: string;
    mail: string;
    phone: number;
    date: string;
    position: string;
    done: boolean;
     
    constructor(
    id: number,
    name: string,
    mail: string,
    phone: number,
    date: string,
    position: string) {
  
  		this.id = id;
	  	this.name = name;
	    this.mail = mail;
	    this.phone = phone;
	    this.date = date;
	    this.position = position;
        this.done = false;
    }
}
 
@Component({
    selector: 'my-app',
    template: `<div class="page-header">
        <h1> Список сотрудников </h1>
    </div>
    <div ngDraggable>Drag me!</div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Имя" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="text" class="form-control" [(ngModel)]="mail" placeholder="Эл. почта" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="phone" placeholder="Телефон" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="text" class="form-control" [(ngModel)]="date" placeholder="Дата" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="text" class="form-control" [(ngModel)]="position" placeholder="Должность" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, mail, phone, date, position)">Добавить</button>
                </div>
            </div>
        </div>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Эл. почта</th>
                    <th>Телефон</th>
                    <th>Дата</th>
                    <th>Должность</th>
                    <th>Редактировать</th>
                    <th>Удалить</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.name}}</td>
                    <td>{{item.mail}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.date}}</td>
                    <td>{{item.position}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                    <td><span class="btn btn-danger" (click)="delItem(item.id)">Удалить</span></td>
                </tr>
            </tbody>
        </table>
    </div>`
})

export class AppComponent { 
    items: Item[] = 
    [
        {id: 6545, name: "Иван", done: false, date: "15.09", mail: "bem@mail.ru", phone: 24533267, position: "Front-end" },
        {id: 6546, name: "Антон", done: false, date: "6.10", mail: "bem@mail.ru", phone: 24533267, position: "Front-end" },
        {id: 6547, name: "Стас", done: true, date: "22.06", mail: "bem@mail.ru", phone: 24533267, position: "Front-end" },
        {id: 6548, name: "Димас", done: false, date: "3.10", mail: "bem@mail.ru", phone: 24533267, position: "Front-end" }
    ];
    addItem(text: string, mail: string, phone: number, date: string, position: string): void {
         
        if(text==null || text==undefined || text.trim()=="")
            return;
        if(phone==null || phone==undefined)
            return;

        let thisId = (() => {
	        let maxId = 0;
	        this.items.forEach(function(item) {
	        	if (item.id > maxId) maxId = item.id;
        	});
        	return maxId + 1;
        })();

        this.items.push(new Item(thisId, text, mail, phone, date, position));
        console.log(this.items);
    }

    delItem(id: number): void {

    	console.log(id);

        if(id==null || id==undefined)
            return;

        this.items.forEach(function(item, i, items) {
        	if(item.id === id) {
        		items.splice(i, 1);
        	}
        });
    }
}