export class User {
    id: number;
    name: string;
    email: string;
    phone: number;
    date: string;
    position: string;

    constructor(id: number, name: string, email: string, phone: number, date: string, position: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.date = date;
        this.position = position;
    }
}