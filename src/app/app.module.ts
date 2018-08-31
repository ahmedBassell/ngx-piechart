import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPiechartComponent } from './ngx-piechart/ngx-piechart.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxPiechartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
