import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  temp=true;
  ngOnInit(): void {
    console.log('ng on it called');
  }
  title = 'AngularApp';


  
}
