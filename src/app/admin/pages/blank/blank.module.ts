import { LayoutModule } from './../../layouts/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './blank.component';

const routes: Routes = [
    {
        'path': '',
        'children': [
            {
                'path': '',
                'component': BlankComponent,
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
        BlankComponent,
    ],
})
export class BlankModule {
}