import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "./material.module";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";

const APP_ROUTES : Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent}
];

@NgModule({
    imports: [MaterialModule, RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
    declarations: [LoginComponent, HomeComponent, HeaderComponent],
    providers: [],
})
export class AppRoutingModule { }
