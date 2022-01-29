import {Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList} from '@angular/core';
import {SimpleTabComponent} from './simple-tab/simple-tab.component';

@Component({
  selector: 'app-simple-tabs',
  templateUrl: './simple-tabs.component.html',
  styleUrls: ['./simple-tabs.component.scss']
})
export class SimpleTabsComponent implements OnInit {

  @ContentChildren(SimpleTabComponent, { descendants: true })
  public allTabs: QueryList<SimpleTabComponent>;

  @Input()
  public disableAllTabs = false;

  @Input()
  public tabIndex = 0;

  @Output()
  public tabIndexChange = new EventEmitter<number>();

  constructor() {
  }

  public setCurrentTabIndex(tabIndex: number): void {
    this.tabIndex = tabIndex;
    this.tabIndexChange.emit(tabIndex);
  }

  ngOnInit(): void {
  }

}
