import { Component, OnInit  } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid"
             [ngClass]="{
                    showAvatar: showAvatar,
                    theme1: settingsTheme === 1,
                    theme2: settingsTheme === 2,
                    theme3: settingsTheme === 3
                }">
            <app-header></app-header>
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./app/styles/app.component.css'],
    providers: [UserService]
})

export class AppComponent implements OnInit {
    settings: any;
    error: any;
    settingsTheme: number;
    showAvatar: boolean;

    ngOnInit() {
        this.getSettings();
    }

    constructor(private userService: UserService) {}

    getSettings(): void {
        this.userService
            .getSettings()
            .then((data) => {
                this.settings = data;
                this.settingsTheme = this.settings.data[0].curThemeId;
                this.showAvatar = this.settings.data[0].showAvatar;
            })
            .catch(error => this.error = error);
    }
}