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
        <mat-card *ngIf="item">
            <h3>User details</h3>

            <mat-card-content>
                <div class="avatar-block">
                    <div class="avatar">
                        <img class="avatar-img" [src]="getAvatar()" alt="user-avatar">
                    </div>
                </div>
                <p><span class="bold">User name:&nbsp;</span>{{item.name}}</p>
                <p><span class="bold">User email:&nbsp;</span>{{item.email}}</p>
                <p><span class="bold">User telephone:&nbsp;</span>{{item.phone}}</p>
                <p><span class="bold">User hiring date:&nbsp;</span>{{item.date}}</p>
                <p><span class="bold">User position:&nbsp;</span>{{item.position}}</p>
            </mat-card-content>

            <mat-card-actions>
                <a class="btn-link" mat-button routerLink="/users">BACK</a>
            </mat-card-actions>
        </mat-card>
    `,
    styles: [`
        .avatar-block {
            padding: 10px 0;
        }

        .avatar {
            width: 100px;
            height: 100px;
            overflow: hidden;
            border-radius: 50%;
        }

        .avatar-img {
            width: 100%;
        }

        .bold {
            display: inline-block;
            min-width: 200px;
            font-size: 1.1em;
            font-weight: bold;
        }
    `],
    providers: [UserService]
})
export class UserDetailsComponent implements OnInit {
    item: User;
    error: any;
    id: number;
    dafaultAvatar: string;

    constructor(private userService: UserService, private activateRoute: ActivatedRoute) {
        this.id = activateRoute.snapshot.params['id'];
        this.dafaultAvatar = 'assets/img/avatar.jpeg';
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

    getAvatar() {
        return this.item.avatar ? this.item.avatar : this.dafaultAvatar;
    }
}