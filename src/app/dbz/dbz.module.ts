import { NgModule } from '@angular/core';
import { DBZComponent } from './pages/main-page.componenent';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/character/character.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DBZComponent,ListComponent, AddCharacterComponent],
  imports : [BrowserModule, FormsModule],
  exports: [DBZComponent]
})
export class DbzModule { }
