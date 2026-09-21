import { Component } from '@angular/core';
import { IOTwoWayChildComponent } from '../iotwo-way-child-component/iotwo-way-child-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iotwo-way-parent-component',
  imports: [CommonModule, FormsModule, IOTwoWayChildComponent],
  templateUrl: './iotwo-way-parent-component.html',
  styleUrl: './iotwo-way-parent-component.css',
})
export class IOTwoWayParentComponent {
  parentvalue = ''

  showvalueobj(message:any) {
  //  this.parentvalue= 
  console.log(`this is from parent component ${message}`)
  }
}
