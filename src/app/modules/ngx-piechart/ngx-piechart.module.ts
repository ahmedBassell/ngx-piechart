import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPiechartComponent } from './ngx-piechart/ngx-piechart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxPiechartComponent],
  exports: [NgxPiechartComponent]
})
export class NgxPiechartModule { }
