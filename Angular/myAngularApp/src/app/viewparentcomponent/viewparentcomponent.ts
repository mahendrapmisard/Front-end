import { Component } from '@angular/core';
import { Viewchildcomponent } from "../viewchildcomponent/viewchildcomponent";

@Component({
  selector: 'app-viewparentcomponent',
  imports: [Viewchildcomponent],
  templateUrl: './viewparentcomponent.html',
  styleUrl: './viewparentcomponent.css',
})
export class Viewparentcomponent {}
