/**
 * Created by hunter_s70 on 07.02.2018.
 */
import { Component} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <mat-card>
            <h3>Homepage</h3>
            
            <mat-card-subtitle>ng4Test</mat-card-subtitle>
            <mat-card-content>
                <p>Test Angular 5 CRUD application, where you can manage users</p>
            </mat-card-content>
            
            <mat-card-subtitle>Start locally</mat-card-subtitle>
            <mat-card-content>
                <p>clone this repository: <span class="code">git clone git@github.com:hunter-s70/ng4Test.git</span></p>
                <p>make ( <a href="https://nodejs.org">you need node.js and npm installed</a> ) in project root: <span class="code">npm install</span></p>
                <p>run server: <span class="code">nmp start</span></p>
                <p>The application will open automatically in your browser</p>
            </mat-card-content>

            <mat-card-actions>
                <a class="btn-link" mat-button href="https://github.com/hunter-s70/ng4Test">REPO</a>
            </mat-card-actions>
        </mat-card>
    `,
    styles: [`
        .code {
            padding: 0 5px;
            font-size: .9em;
            color: #5a5353;
            background: #e6d0d0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        
        .btn-link {
            text-decoration: none;
        }
    `]
})
export class HomeComponent { }