import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { LayoutModule } from './admin/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { AdminRoutingModule } from "./admin/admin-routing.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
    declarations: [
        AdminComponent,
        AppComponent,
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AdminRoutingModule,
        AuthModule,
    ],
    providers: [ScriptLoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }