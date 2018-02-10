import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            <app-header></app-header>
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./app/styles/app.component.css'],
})

export class AppComponent {}