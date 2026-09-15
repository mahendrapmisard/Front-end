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
  backgroundColor = 'red';
  fontSize = '20px';

  signMessage = 'stop';

  makeRed() {
    this.textColor = 'white';
    this.backgroundColor = 'red';
    this.signMessage = 'stop';
  }

  makeGreen() {
    this.textColor = 'white';
    this.backgroundColor = 'green';
    this.signMessage = 'go';
  }

  makeBlue() {
    this.textColor = 'white';
    this.backgroundColor = 'orange';
    this.signMessage = 'be ready';
  }
}
