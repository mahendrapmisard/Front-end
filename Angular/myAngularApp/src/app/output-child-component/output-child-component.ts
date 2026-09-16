import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-output-child-component',
  imports: [FormsModule],
  templateUrl: './output-child-component.html',
  styleUrl: './output-child-component.css',
})
export class OutputChildComponent {

  messagetosend= ''

  @Output() msgfromchild = new EventEmitter<string>();

//  msgfromchild = output<string>()
sendmsg(){
  // this.msgfromchild.
  this.msgfromchild.emit(this.messagetosend)
}


}
