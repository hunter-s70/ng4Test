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
    templateUrl: './app/UsersCmp/tmp/users_list.html'
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