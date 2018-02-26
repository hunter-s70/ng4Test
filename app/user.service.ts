import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { User } from './User';

@Injectable()
export class UserService {
    private usersUrl = 'app/users';  // URL to web api
    private settingsUrl = 'app/settings';  // URL to settings object

    constructor(private http: HttpClient){}

    getUsers(): Promise<Array<User>> {
        return this.http
            .get(this.usersUrl)
            .toPromise()
            .then((response) => response.data.reverse() as User[])
            .catch(this.handleError);
    }

    getUserInfo(id: number): Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.id === id))
            .catch(this.handleError);
    }

    saveUser(user: User): Promise<User> {
        return this.post(user);
    }

    updateUser(user: User): Promise<User> {
        return this.put(user);
    }

    deleteUser(user: User): Promise<User> {
        const url = `${this.usersUrl}/${user.id}`;

        return this.http
            .delete(url)
            .toPromise()
            .catch(this.handleError);
    }

    // Add new User
    private post(user: User): Promise<User> {
        return this.http
            .post(this.usersUrl, user)
            .toPromise();
    }

    // update current User
    private put(user: User): Promise<User> {
        const url = `${this.usersUrl}/${user.id}`;

        return this.http
            .post(url, user)
            .toPromise()
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}