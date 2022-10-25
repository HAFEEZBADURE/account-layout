import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user$: Observable<any>;
  name: string = 'Hafeez';
  constructor(private _authContext: AuthService) {
    this.user$ = this._authContext.loadUser();
  }

  ngOnInit(): void {}
}
