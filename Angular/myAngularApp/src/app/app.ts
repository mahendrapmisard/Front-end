import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from "./first/first";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, First, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  
}
