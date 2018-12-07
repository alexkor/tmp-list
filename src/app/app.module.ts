import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, ColumnDirective, AppListComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnDirective,
    AppListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
