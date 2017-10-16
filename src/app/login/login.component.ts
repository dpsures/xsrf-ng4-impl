import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router : Router, private _login_service : LoginService) { }

  ngOnInit() {
  }

  login(){
    this._login_service.authUser();
    this._router.navigate(['/home']);
  }
}
