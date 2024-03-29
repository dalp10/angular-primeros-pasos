import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: 'krilin', power: 5000 },
    { id: uuid(), name: 'Goku', power: 10000 },
    { id: uuid(), name: 'Vegeta', power: 15000 }
  ]

  addCharacter(character: Character): void {
    // const newCharacter : Character = {
    //   id : uuid(),
    //   name : name,
    //   power : power
    // }

    const newCharacter: Character = { ...character, id: uuid() };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById( id: string) : void{
    console.log(this.characters );
    this.characters = this.characters.filter(character => character.id != id)
  }

  constructor() { }

}
