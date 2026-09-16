import { Component } from '@angular/core';
import { OutputChildComponent } from '../output-child-component/output-child-component';

@Component({
  selector: 'app-output-parent-component',
  imports: [OutputChildComponent],
  templateUrl: './output-parent-component.html',
  styleUrl: './output-parent-component.css',
})
export class OutputParentComponent {

  messagetobeprintinparent = ''
  messagetoprint(message: any) {
    console.log(message);
    this.messagetobeprintinparent = message
  }
}
