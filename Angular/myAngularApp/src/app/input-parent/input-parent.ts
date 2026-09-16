import { Component } from '@angular/core';
import { InputChild } from '../input-child/input-child';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-parent',
  imports: [InputChild, CommonModule, FormsModule],
  templateUrl: './input-parent.html',
  styleUrl: './input-parent.css',
})
export class InputParent {
  empname = '';

  empsalary = '';
}
