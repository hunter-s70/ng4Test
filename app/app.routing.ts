/**
 * Created by hunter_s70 on 08.02.2018.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// components imports
import { HomeComponent } from './components/HomeCmp/app.home';
import { SettingsComponent } from './components/SettingsCmp/app.settings';
import { UsersComponent } from './components/UsersCmp/app.users';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}