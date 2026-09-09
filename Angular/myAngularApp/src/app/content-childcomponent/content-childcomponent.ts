import { Component, ContentChild, ElementRef } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-content-childcomponent',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './content-childcomponent.html',
  styleUrl: './content-childcomponent.css',
})
export class ContentChildcomponent {

@ContentChild('employeinfo') employeeinfo !: ElementRef<HTMLElement>;


@ContentChild('employeename') employeename !: ElementRef<HTMLInputElement>;
empinfo = ''
empname = ''

showemployeeinfo(){

// this.empinfo = 

// this.empname = this.employeename.nativeElement.value
this.empinfo = this.employeeinfo.nativeElement.textContent
console.log(this.empinfo)


}

}
