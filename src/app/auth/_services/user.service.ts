import { Injectable } from "@angular/core";

import { User } from "../_models/index";

@Injectable()
export class UserService {
    constructor() {
    }

    verify() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }  

   
}