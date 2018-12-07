import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, AppColumnDirective, AppListComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppColumnDirective,
    AppListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
