import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = "ironman";
  public age : number = 45;

  get capitalizeName() : string{
    return this.name.toUpperCase();
  }

  getHeroDesciption() : string{
     return `${this.name}-${this.age}`;
  }

  changeHero():void{
    this.name="spiderman"
  }

  changeAge() : void{
    this.age = 50
  }

  resetForm() : void{
    this.name='iroman'
    this.age=45
  }

}
