import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>{{counter}}</h1>
  <button (click)="incrementBy(1)">+</button>
  <button (click)="resetCounter()">reset</button>
  <button (click)="incrementBy(-1)">-</button>`
})

export class CounterComponent {
  counter : number = 10;

  incrementBy(value : number) : void{
    this.counter+=value;
  }

  resetCounter(){
    this.counter=10
  }

}
