import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-iotwo-way-child-component',
  imports: [],
  templateUrl: './iotwo-way-child-component.html',
  styleUrl: './iotwo-way-child-component.css',
})
export class IOTwoWayChildComponent {
  @Input() childincommingvalue = '';

  @Output() outgoingchildvalue = new EventEmitter<string>();
  convertto() {
    this.outgoingchildvalue.emit(this.childincommingvalue.toUpperCase());
  }
}
