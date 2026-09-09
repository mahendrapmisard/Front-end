import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from "./first/first";
import { NgStyle } from '@angular/common';
// import { Viewparentcomponent } from "./viewparentcomponent/viewparentcomponent";
import { ContentParentcomponent } from './content-parentcomponent/content-parentcomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, First, NgStyle,ContentParentcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  
}
