import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fixThingflag = true;
  @HostBinding('attr.class') class = 'content block';  // multiple class
  @HostBinding('class.fixed-thing') fixThing = this.fixThingflag;  // 3rd class added conditionally
}
