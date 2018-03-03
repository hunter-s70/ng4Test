import { Component, OnInit  } from '@angular/core';
import { UserService } from './user.service';
import { SettingsService } from './settings.service';

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
    styles: [`
        input.form-control.ng-touched.ng-invalid {
            border: solid red 1px;
        }

        input.form-control.ng-touched.ng-valid {
            border: solid green 1px;
        }
    `],
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

    constructor(private userService: UserService, private settingsService: SettingsService) {
        this.settingsService.catchSetting().subscribe(setting => {
            this.settingsTheme = setting.curThemeId;
            this.showAvatar = setting.showAvatar;
        });
    }

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