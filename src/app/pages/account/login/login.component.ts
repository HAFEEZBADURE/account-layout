import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Ilogin } from '../models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginInput: Ilogin = {
    userName: localStorage.getItem('username') || '',
    rememberme: localStorage.getItem('rememberme') === 'true',

    password: '',
  };
  apiResponse: any = {};
  sending: boolean = false;
  constructor(private _accountContext: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  postLoginForm() {
    this.sending = true;
    this._accountContext.login(this.loginInput).subscribe((apiResponse) => {
      this.apiResponse = apiResponse;
      this.sending = false;

      if (this.loginInput.rememberme) {
        //store username to browser storage
        localStorage.setItem('username', this.loginInput.userName);
      } else {
        localStorage.removeItem('username');
      }
      if (this.loginInput.rememberme) {
        localStorage.setItem('rememberme', `${this.loginInput.rememberme}`);
      } else {
        localStorage.removeItem('rememberme');
      }
      //redirect user to dashbaord
      if (apiResponse && apiResponse.id) {
        localStorage.setItem('myToken', apiResponse.data);
        this._router.navigate(['dashboard']);
      }
    });
  }
}
