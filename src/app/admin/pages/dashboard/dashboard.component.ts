import { ScriptLoaderService } from './../../../_services/script-loader.service';
import { Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit, AfterViewInit, AfterContentInit {

    constructor(private _script: ScriptLoaderService, private toastr: ToastrService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']);
           
    }

    ngAfterContentInit() {
        setTimeout(()=>this.toastr.success('Hello world!', 'Toastr fun!'))
        
    }
}