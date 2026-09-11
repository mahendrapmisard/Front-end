import {
  Component,
  contentChild,
  contentChildren,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  signal,
} from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  selector: 'app-content-childcomponent',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './content-childcomponent.html',
  styleUrl: './content-childcomponent.css',
})
export class ContentChildcomponent {
  // @ContentChildren('employeinfo') employeeinfo!: QueryList<ElementRef<HTMLElement>>;

  employeeinfo = contentChildren<ElementRef<HTMLElement>>('employeinfo');

  // @ContentChild('employeename') employeename!: ElementRef<HTMLElement>;

  employeename = contentChild<ElementRef<HTMLElement>>('employeename');

  empinfo = signal<string[]>([]);
  empname: string | undefined = '';

  showemployeeinfo() {
    // let empinfo :string[] = []
    // this.empinfo =

    // this.empname = this.employeename.nativeElement.value
    this.employeeinfo().forEach((item) => {
      this.empinfo.update((element) => [...element, item.nativeElement.textContent]);
    });
    // console.log(this.employeeinfo)

    this.empname = this.employeename()?.nativeElement.textContent;
    // console.log(this.empname)
  }
}
