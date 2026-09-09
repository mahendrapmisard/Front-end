import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-viewchildcomponent',
  imports: [CommonModule,FormsModule],
  templateUrl: './viewchildcomponent.html',
  styleUrl: './viewchildcomponent.css',
})
export class Viewchildcomponent {

  @ViewChild('employeename') employeename !:  ElementRef<HTMLInputElement>;
  empname = ''
  showemployee(){
    console.log(this.employeename.nativeElement.value);

    this.empname = this.employeename.nativeElement.value;
  }

  empinfo:string[] = [];
  @ViewChildren('employeeinfo') employeeinfo!: QueryList<ElementRef<HTMLInputElement>>


  message = ''
showEmpInfo(){

  this.message= "Please check the employee"
  // console.log(this.employeeinfo);
  this.employeeinfo.forEach(element => {
    console.log(element.nativeElement.value);
    if(element.nativeElement.value){
    this.empinfo.push(element.nativeElement.value);
    }
    else{
      this.message = "please enter valid data"
    }
  });
}

}
