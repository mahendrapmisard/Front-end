import { Component, signal } from '@angular/core';
import { First } from "../first/first";
import { NgStyle } from '@angular/common';
import { Second } from '../second/second';


@Component({
  selector: 'app-third',
  imports: [First,NgStyle,Second],
  templateUrl: './third.html',
  styleUrl: './third.css',
})
export class Third {
   // protected readonly title = signal('myAngularApp');
  para : String = " this is normal para from ts file using string interpolation"

  textvalue : string = "this is text from string interpolation into textbox"

  name:String = ""
  fname : String = ""

  max_length:number = 10
min_length : number = 5 
  nameplaceholder :string = "enter your name"
methodbinding(){
  return "this is function return";
}

submitclicked(eveobj:any){
  // console.log(" the submit got clicked");
  this.fname = this.name

}


headingcolour = "blue";

pickthename(nameeve:any){
  // console.log("anem is entered")
this.name = nameeve.srcElement.value
// console.log(nameeve.srcElement.value)
}

isliked :boolean = false

likes :number = 0;

heartliked(){

  // this.isliked = !this.isliked
  if(this.isliked){
    this.isliked = false;
    this.likes = this.likes-1;
  }
  else {
  this.isliked = true;
  this.likes = this.likes+1;
}
}

}

