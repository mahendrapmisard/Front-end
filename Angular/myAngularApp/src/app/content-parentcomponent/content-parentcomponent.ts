import { Component, contentChild } from '@angular/core';
import { ContentChildcomponent } from '../content-childcomponent/content-childcomponent';

@Component({
  selector: 'app-content-parentcomponent',
  imports: [ContentChildcomponent],
  templateUrl: './content-parentcomponent.html',
  styleUrl: './content-parentcomponent.css',
})
export class ContentParentcomponent {}
