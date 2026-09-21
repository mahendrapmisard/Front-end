import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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
    this.outgoingchildvalue.emit(this.paravalue.nativeElement.textContent);
  }

  @ViewChild('paravalue') paravalue !: ElementRef<HTMLParagraphElement>;

  showparaelemet(){
console.log(this.paravalue.nativeElement.textContent)
  }




}
