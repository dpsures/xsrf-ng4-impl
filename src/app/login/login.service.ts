import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(private _http : HttpClient) { }
    
    authUser() : boolean {
        console.log('http login call');
        this._http.get('assets/user.json')
        .subscribe(data => {
            data => console.log("data response --->"+data)
        });
        return false;
    }
}