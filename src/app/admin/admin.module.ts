import { LayoutModule } from './layouts/layout.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent],
  exports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
