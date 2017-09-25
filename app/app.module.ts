import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ModalComponent }  from './app.modal.component';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularDraggableModule ],
  declarations: [ AppComponent, ModalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
