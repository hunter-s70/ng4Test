/**
 * Created by hunter_s70 on 07.02.2018.
 */
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-settings',
    template: `
        <mat-card *ngIf="settings">
            <mat-card-content>
                <h3>Settings</h3>

                    <mat-form-field>
                        <mat-select placeholder="Select application theme" [(ngModel)]="selectedTheme" name="theme">
                            <mat-option *ngFor="let theme of themesList" [value]="theme.value">
                                {{theme.viewValue}}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>

                    <p> Selected value: {{selectedTheme}} </p>

                    <mat-checkbox color="primary"
                                  [(ngModel)]="showAvatar">
                        Show user Photo
                    </mat-checkbox>

            </mat-card-content>
            <button mat-button (click)="saveSettings()">SAVE SETTINGS</button>
        </mat-card>
    `,
    providers: [UserService]
})
export class SettingsComponent implements OnInit {
    selectedTheme: number;
    settings: any;
    error: any;
    showAvatar: boolean;

    themesList = [
        {value: 1, viewValue: 'Theme 1'},
        {value: 2, viewValue: 'Theme 2'},
        {value: 3, viewValue: 'Theme 3'}
    ];

    ngOnInit() {
        this.getSettings();
    }

    constructor(private userService: UserService) {}

    getSettings(): void {
        this.userService
            .getSettings()
            .then((data) => {
                this.settings = data;
                this.selectedTheme = this.settings.data[0].curThemeId;
                this.showAvatar = this.settings.data[0].showAvatar;
            })
            .catch(error => this.error = error);
    }

    saveSettings() {
        this.userService
            .setSettings({
                id: this.settings.data[0].id,
                showAvatar: this.showAvatar,
                curThemeId: this.selectedTheme
            })
            .then(() => { this.getSettings() })
            .catch(error => this.error = error);
    }
}