import {Component, Input, OnChanges, OnInit, SimpleChanges, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit, OnChanges {

  @Input()
  theme: string;

  themes = {
    "light": "../light-theme/light-theme.component",
    "dark": "../dark-theme/dark-theme.component",
  };

  themeComponent$;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {

    if(changes.theme && changes.theme.currentValue) {

      switch(changes.theme.currentValue) {
        case 'light': 
          this.themeComponent$ = import("../light-theme/light-theme.component").then(({ThemeComponent}) => ThemeComponent);

          break;

        case 'dark':
            this.themeComponent$ = import("../dark-theme/dark-theme.component").then(({ThemeComponent}) => ThemeComponent);

          break;
      }

      this.switchTheme(changes.theme.previousValue, changes.theme.currentValue);
    }
  }

  switchTheme(previousTheme, nextTheme) {

    this.document.body.classList.remove(`theme-${previousTheme}`);
    this.document.body.classList.add(`theme-${nextTheme}`);
  }

}
