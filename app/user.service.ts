import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

// import { User } from './User';

@Injectable()
export class UserService {

    constructor(private http: HttpClient){ }

    getData() {
        return this.http.get('./assets/json/user.json')
    }
}