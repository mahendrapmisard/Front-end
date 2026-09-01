import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-first',
  imports: [NgStyle],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {


  textColor = 'white';
  backgroundColor = 'blue';
  fontSize = '20px';

  makeRed() {
    this.textColor = 'white';
    this.backgroundColor = 'red';
  }

  makeGreen() {
    this.textColor = 'white';
    this.backgroundColor = 'green';
  }

  makeBlue() {
    this.textColor = 'white';
    this.backgroundColor = 'blue';
  }

}
