import { LayoutModule } from '../../layouts/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        'path': '',
        'children': [
            {
                'path': '',
                'component': DashboardComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
    ], exports: [
        RouterModule,
    ], declarations: [
        DashboardComponent,
    ],
})
export class DashboardModule {
}