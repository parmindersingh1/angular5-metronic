import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layouts/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    LayoutModule
  ]
})
export class SharedModule { }
