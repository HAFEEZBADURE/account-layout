import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { TitleResolver } from './core/services/title.resolver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _titleResolver: TitleResolver
  ) {
    this._router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => this._titleResolver.getRouterPageTitle(this._route))
      )
      .subscribe((pageTitle) => {
        _titleResolver.updateTitle(pageTitle);
      });
  }
}
