import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// main component
import { AppComponent }  from './app.component';
import { CdkTableModule } from '@angular/cdk/table';

// angular draggable plugin
import { AngularDraggableModule } from 'angular2-draggable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// material dialog components
import { DialogDataExample, DialogDataExampleDialog } from './app.matireal.dialog';

// router
import { AppRoutingModule } from './app.routing';

// router components
import { HomeComponent } from './components/HomeCmp/app.home';
import { SettingsComponent } from './components/SettingsCmp/app.settings';
import { UsersComponent } from './components/UsersCmp/app.users';

// shared components
import { AppHeader }  from './components/SharedCmp/HeaderCmp/app.header';

// material design
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

// custom material desing module
@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class MaterialModule {}

// main module
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AngularDraggableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AppHeader,
    DialogDataExample,
    DialogDataExampleDialog,
    HomeComponent,
    SettingsComponent,
    UsersComponent
  ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ DialogDataExampleDialog ]
})
export class AppModule {}
