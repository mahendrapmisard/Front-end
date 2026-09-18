import { Component } from '@angular/core';
import { IOTwoWayChildComponent } from '../iotwo-way-child-component/iotwo-way-child-component';

@Component({
  selector: 'app-iotwo-way-parent-component',
  imports: [IOTwoWayChildComponent],
  templateUrl: './iotwo-way-parent-component.html',
  styleUrl: './iotwo-way-parent-component.css',
})
export class IOTwoWayParentComponent {}
