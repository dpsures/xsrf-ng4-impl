import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(private _http : HttpClient) { }
    
    authUser() : boolean {
        this._http.get('assets/user.json');
        return false;
    }
}