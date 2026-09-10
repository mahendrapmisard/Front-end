import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  selector: 'app-content-childcomponent',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './content-childcomponent.html',
  styleUrl: './content-childcomponent.css',
})
export class ContentChildcomponent {
  @ContentChildren('employeinfo') employeeinfo!: QueryList<ElementRef<HTMLElement>>;

  @ContentChild('employeename') employeename!: ElementRef<HTMLElement>;
  empinfo: string[] = [];
  empname = '';

  showemployeeinfo() {
    // let empinfo :string[] = []
    // this.empinfo =

    // this.empname = this.employeename.nativeElement.value
    this.employeeinfo.forEach((item) => {
      this.empinfo.push(item.nativeElement.innerText);
    });
    // console.log(this.employeeinfo)

    this.empname = this.employeename.nativeElement.textContent;
    // console.log(this.empname)
  }
}
