import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [],
  exports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
