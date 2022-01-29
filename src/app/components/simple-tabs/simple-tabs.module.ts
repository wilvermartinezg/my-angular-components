import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleTabsComponent} from './simple-tabs.component';
import {SimpleTabComponent} from './simple-tab/simple-tab.component';
import {PortalModule} from '@angular/cdk/portal';
import {SimpleTabContentDirective} from './simple-tab/simple-tab.directives';

@NgModule({
  declarations: [SimpleTabsComponent, SimpleTabComponent, SimpleTabContentDirective],
  imports: [CommonModule, PortalModule],
  exports: [SimpleTabsComponent, SimpleTabComponent, SimpleTabContentDirective]
})
export class SimpleTabsModule {
}
