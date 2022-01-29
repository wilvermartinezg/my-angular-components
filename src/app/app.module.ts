import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SimpleTabsModule} from './components/simple-tabs/simple-tabs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SimpleTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
