import { Component, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-child',
  imports: [],
  templateUrl: './input-child.html',
  styleUrl: './input-child.css',
})
export class InputChild {


  @Input() username :string = "";

  empname = input<string>('')

  // @Output() salary = 'high';
}
