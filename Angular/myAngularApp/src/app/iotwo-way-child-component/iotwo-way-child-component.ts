import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-iotwo-way-child-component',
  imports: [],
  templateUrl: './iotwo-way-child-component.html',
  styleUrl: './iotwo-way-child-component.css',
})
export class IOTwoWayChildComponent {
  @Input() incomingValue = '';
  // uppervalue: string = this.incomingValue.toUpperCase();;
  // this.uppervalue = 
  // convertto() {
  // }
}
