import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  angularLogo="hey";
  buttonStatus=false;
  myEvent(event){
    console.log("event :"+event)
  }
}
