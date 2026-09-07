import { NgStyle, NgClass, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-second',
  imports: [NgStyle, NgClass , FormsModule,CommonModule],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second{
  textcolor : string  = "red";

  backgroundcolor: string = "blue";

  btncolor = "gold"
buttontext = "blue"
// nomessage: TemplateRef<NgIfContext<boolean>>|null;
// passedtemplate: TemplateRef<NgIfContext<boolean>>|null;

  btnclick(eve:any){
    if(this.backgroundcolor == "blue"){
      this.backgroundcolor= "white"
      this.buttontext = 'off'
    }
    else{
      this.backgroundcolor = "blue"
      this.buttontext='on'
    }
  }


trafficlight = 'green';

changefunction($event:any){
  console.log($event.srcElement.value);
this.trafficlight = $event.srcElement.value
}


 employees = [	
{	
employeeId: 101,	
name: "Alice Johnson",	
department: "HR",	
salary: 55000	
},	
{	
employeeId: 102,	
name: "Bob Smith",	
department: "IT",	
salary: 70000	
},	
{	
employeeId: 103,	
name: "Charlie Brown",	
department: "Finance",	
salary: 65000	
}	
 ];

 products = [	
{	
productId: "P001",	
productName: "Laptop",	
price: 750,	
stock: 25	
},	
{	
productId: "P002",	
productName: "Mouse",	
price: 20,	
stock: 150	
},	
{	
productId: "P003",	
productName: "Keyboard",	
price: 45,	
stock: 80	
}	
];	

marks :any = '';
// console.log(${name});

pass = "you are passed"
failed = "you are failed"
message = ''


checkresult(marks:any){
 if(marks==''){
this.message = 'please enter the marks'
 }
 else if(marks<75){
  this.message = "sorry you are failed please try again"
 }
 else if(marks>75 && marks <85){
this.message= 'congratulations you are passed in distinction class'
 }
 else{
  this.message= " congratulations you passed in first class"
 }
}

}









