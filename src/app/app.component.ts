import { Component } from '@angular/core';

interface AppState {
  cart: Array<Object>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amazombie';


}
