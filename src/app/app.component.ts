import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'themeable-app-ivy';

  currentTheme = 'first';

  constructor() {
    setTimeout(() => {
      this.currentTheme = 'second';
    }, 5000);
  }
}
