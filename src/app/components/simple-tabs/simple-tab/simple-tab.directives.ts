import {Directive} from '@angular/core';
import {CdkPortal} from '@angular/cdk/portal';

@Directive({
  selector: '[appSimpleTabContent]',
})
export class SimpleTabContentDirective extends CdkPortal {
}
