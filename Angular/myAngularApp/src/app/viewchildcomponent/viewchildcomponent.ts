import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  QueryList,
  signal,
  viewChild,
  ViewChild,
  ViewChildren,
  viewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-viewchildcomponent',
  imports: [CommonModule, FormsModule],
  templateUrl: './viewchildcomponent.html',
  styleUrl: './viewchildcomponent.css',
})
export class Viewchildcomponent {
  // @ViewChild('employeename') employeename !:  ElementRef<HTMLInputElement>;

  employeename = viewChild<ElementRef<HTMLInputElement>>('employeename');
  Sempname = signal('');
  empname = '';
  showemployee() {
    this.empname = this.employeename()?.nativeElement.value ?? '';
    this.Sempname.set(this.empname);
  }
  message = '';

  // empinfo:string[] = [];
  // @ViewChildren('employeeinfo') employeeinfo!: QueryList<ElementRef<HTMLInputElement>>
  // showEmpInfo(){

  //   this.message= "Please check the employee"
  //   // console.log(this.employeeinfo);
  //   this.employeeinfo.forEach(element => {
  //     console.log(element.nativeElement.value);
  //     if(element.nativeElement.value){
  //     this.empinfo.push(element.nativeElement.value);
  //     }
  //     else{
  //       this.message = "please enter valid data"
  //     }
  //   });
  // }
  employeeinfo = viewChildren<ElementRef<HTMLInputElement>>('employeeinfo');

  empinfo = signal<string[]>([]);

  showEmpInfo() {
    this.message = 'Please check the employee';

    this.employeeinfo().forEach((element) => {
      if (element.nativeElement.value) {
        this.empinfo.update((current) => [...current, element.nativeElement.value]);
      } else {
        this.message = 'please enter valid data';
      }
    });
  }
}
