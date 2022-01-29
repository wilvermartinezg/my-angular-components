import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {SimpleTabContentDirective} from './simple-tab.directives';

@Component({
  selector: 'app-simple-tab',
  templateUrl: './simple-tab.component.html'
})
export class SimpleTabComponent implements OnInit {

  @Input()
  public tabTitle = '';

  @Input()
  public showTab = true;

  /**
   * template para establecer el toolbar
   */
  @ContentChild(SimpleTabContentDirective, {static: true})
  public templateContent: SimpleTabContentDirective;

  constructor() {
  }

  ngOnInit(): void {
  }

}
