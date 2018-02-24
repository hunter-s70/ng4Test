/**
 * Created by hunter_s70 on 24.02.2018.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { User } from '../../User';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-user-details',
    template: `
        <div *ngIf="item">
            <span>User Details {{ id }}</span>
            <span>User Name {{ item.name }}</span>
        </div>
    `,
    providers: [UserService]
})
export class UserDetailsComponent implements OnInit {
    item: User;
    error: any;
    id: number;

    constructor(private userService: UserService, private activateRoute: ActivatedRoute) {
        this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.getUserInfo();
    }

    getUserInfo(): void {
        this.userService
            .getUserInfo(+this.id)
            .then(data => this.item = data)
            .catch(error => this.error = error);
    }
}