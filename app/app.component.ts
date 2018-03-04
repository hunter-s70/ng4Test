import { Component, OnInit  } from '@angular/core';
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
            <div *ngIf="error" class="alert alert-danger">{{ error }}</div>
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
    `]
})

export class AppComponent implements OnInit {
    settings: any;
    error: any;
    settingsTheme: number;
    showAvatar: boolean;

    ngOnInit() {
        this.getSettings();
    }

    constructor(private settingsService: SettingsService) {
        // rxjs subscriber
        this.settingsService.catchSetting().subscribe(setting => {
            this.settingsTheme = setting.curThemeId;
            this.showAvatar = setting.showAvatar;
        });
    }

    getSettings(): void {
        this.settingsService
            .getSettings()
            .then((data) => {
                this.settings = data;
                this.settingsTheme = this.settings.data[0].curThemeId;
                this.showAvatar = this.settings.data[0].showAvatar;
            })
            .catch(error => this.error = error);
    }
}