import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { NgStyle } from '@angular/common';
import { Viewparentcomponent } from './viewparentcomponent/viewparentcomponent';
import { Second } from './second/second';
import { Powerbill } from './powerbill/powerbill';
import { InputParent } from './input-parent/input-parent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, First, NgStyle, Second, First,Powerbill, InputParent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
