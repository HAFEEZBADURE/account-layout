import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from '../../pages/account/models/login.interface';
import { map } from 'rxjs';
import { Iuser } from '../models/user.interface';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user: Iuser;
  public get user() {
    return this._user;
  }
  constructor(private _httpClient: HttpClient) {
    this._user = { firstName: '', profilePic: '', role: '', userCode: '' };
  }

  login(input: Ilogin) {
    return this._httpClient.post<any>(
      'https://ytc.beginner2expert.com/angular14/api/public/lesssecure/account/login',
      input
    );
  }

  loadUser() {
    const headers = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('myToken'),
      },
    };
    return this._httpClient
      .get(
        'https://ytc.beginner2expert.com/angular14/api/public/secure/user/basic/details',
        headers
      )
      .pipe(
        map((apiResponse: any) => {
          this._user = {
            ...apiResponse.data,
            profilePicPath: apiResponse.data.profilePic,
            role: apiResponse.data.roleName,
          };

          return this._user;
        })
      );
  }
}
