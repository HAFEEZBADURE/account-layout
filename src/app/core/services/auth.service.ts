import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from '../../pages/account/models/login.interface';
import { map } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  login(input: Ilogin) {
    return this._httpClient.post<any>(
      'https://ytc.beginner2expert.com/angular14/api/public/lesssecure/account/login',
      input
    );
  }

  loadUser() {
    const headers = {
      headers: {
        Authorization: 'Bearer' + localStorage.getItem('myToken'),
      },
    };
    return this._httpClient
      .get(
        'https://ytc.beginner2expert.com/angular14/api/public/secure/user/basic/details',
        headers
      )
      .pipe(
        map((apiResponse: any) => {
          return apiResponse.data;
        })
      );
  }
}
