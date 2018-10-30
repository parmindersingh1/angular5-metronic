import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AuthRoutingModule } from './auth-routing.routing';
import { AuthComponent } from './auth.component';
import { AlertComponent } from './_directives/alert.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';


@NgModule({
    declarations: [
        AuthComponent,
        AlertComponent,
        LogoutComponent,
    ],
    imports: [
        SharedModule,
        FormsModule,
        HttpClientModule,
        AuthRoutingModule,
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService       
    ],
    entryComponents: [AlertComponent],
})

export class AuthModule {
}