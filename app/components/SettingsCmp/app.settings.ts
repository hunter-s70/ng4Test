/**
 * Created by hunter_s70 on 07.02.2018.
 */
import { Component} from '@angular/core';

@Component({
    selector: 'app-settings',
    template: `
        <mat-card>
            <mat-card-content>
                <h3>Settings</h3>

                    <mat-form-field>
                        <mat-select placeholder="Select application theme" [(ngModel)]="selectedValue" name="food">
                            <mat-option *ngFor="let food of foods" [value]="food.value">
                                {{food.viewValue}}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>

                    <p> Selected value: {{selectedValue}} </p>

                    <mat-checkbox color="primary"
                                  (change)="showOptions()"
                                  [(ngModel)]="showPhoto">
                        Show user Photo
                    </mat-checkbox>
            </mat-card-content>
        </mat-card>
    `
})
export class SettingsComponent {
    selectedValue: string;

    showPhoto = true;

    foods = [
        {value: 'theme-1', viewValue: 'Theme 1'},
        {value: 'theme-2', viewValue: 'Theme 2'},
        {value: 'theme-3', viewValue: 'Theme 3'}
    ];

    showOptions(): void {
        console.log(this.showPhoto);
    }
}