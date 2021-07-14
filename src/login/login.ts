import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from '../services/http.service';

     
@Component({
    selector: 'log-app',
    templateUrl: './login.html',
    styleUrls: ['./login.css'], 
    providers: [HttpService]
})
export class LoginComponent { 
    constructor(
        private router: Router,
        private httpService: HttpService){}

    typePasswordFild = "password";
    textButtomShowPassword = "show-password";
    flPassword : boolean = true;
    flLogin : boolean = true;
    flCorrectInput : boolean = true;
    login : string = '';
    password : string = '';

    enter(){
        this.flCorrectInput = true;

        
        console.log(this.login);
        if (this.login === '') {
            this.flLogin = false;
            this.flCorrectInput = false;
        }
        else{
            this.flLogin = true;
        }
        if (this.password === '') {
            this.flPassword = false;
            this.flCorrectInput = false;
        }
        else{
            this.flPassword = true;
        }


        if (this.flCorrectInput === true) {
            const data = {login: this.login, password : this.password};
            this.httpService.postData(this.httpService.urlAuf, data);
            this.router.navigate(['admin']);
        }
        console.log(this.password);
    }

    showPassword() {
        if (this.typePasswordFild === "password") {
            this.typePasswordFild = "text";
        }
        else if (this.typePasswordFild === "text") {
            this.typePasswordFild = "password";
        }

        if (this.textButtomShowPassword === "show-password") {
            this.textButtomShowPassword = "hide-password";
        }
        else if (this.textButtomShowPassword === "hide-password") {
            this.textButtomShowPassword = "show-password";
        }
    }

    
}