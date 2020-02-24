import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit, OnChanges {

  @Input()
  theme: string;

  lazyComponent;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes) {
    if (this.theme === 'first') {
      this.lazyComponent = import('../theme1/theme1.component').then(({Theme1Component}) => Theme1Component);
    } else if (this.theme === 'second') {
      this.lazyComponent = import('../theme2/theme2.component').then(({Theme2Component}) => Theme2Component);
    }
  }

}
