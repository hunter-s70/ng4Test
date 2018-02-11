import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { User } from './User';

@Injectable()
export class UserService {
    private usersUrl = 'app/users';  // URL to web api

    constructor(private http: HttpClient){}

    getUsers(): Promise<Array<User>> {
        return this.http
            .get(this.usersUrl)
            .toPromise()
            .then((response) => response.data as User[])
            .catch(this.handleError);
    }

    saveUser(user: User): Promise<User> {
        return this.post(user);
    }

    // Add new User
    private post(user: User): Promise<User> {
        return this.http
            .post(this.usersUrl, user)
            .toPromise()
            .then((response) => response.data);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}