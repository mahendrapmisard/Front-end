import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('myAngularApp');
  para : String = " this is normal para from ts file using string interpolation"

  name:String = ""
  fname : String = ""

  nameplaceholder :string = "enter your name"
methodbinding(){
  return "this is function return";
}

submitclicked(eveobj:any){
  // console.log(" the submit got clicked");
  this.fname = this.name

}

pickthename(nameeve:any){
  // console.log("anem is entered")
this.name = nameeve.srcElement.value
// console.log(nameeve.srcElement.value)
}

}
