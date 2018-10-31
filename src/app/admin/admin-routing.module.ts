import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';

const routes: Routes = [
    {
        'path': '',
        'component': AdminComponent,
        'canActivate': [AuthGuard],
        'children': [
            {
                'path': 'admin',
                'loadChildren': '.\/pages\/blank\/blank.module#BlankModule',
            },
            {
                'path': '',
                'redirectTo': 'admin',
                'pathMatch': 'full',
            },
        ],
    },
    {
        'path': '**',
        'redirectTo': 'admin',
        'pathMatch': 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }