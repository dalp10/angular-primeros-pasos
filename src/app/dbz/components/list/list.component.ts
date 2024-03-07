import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css',]
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',power:10
  }]

  @Output()
  public onDeleteId :EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index ? : string) : void {
    //TODO : emit el id del personake.
    //console.log(index);
    this.onDeleteId.emit(index);
  }
 }
