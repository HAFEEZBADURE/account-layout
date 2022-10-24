import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TitleResolver {
  private _baseTitle: string;

  constructor(private _title: Title) {
    this._baseTitle = _title.getTitle();
  }

  updateTitle(pageTitle: string) {
    this._title.setTitle(this._baseTitle + ' | ' + pageTitle);
  }

  getRouterPageTitle(route: ActivatedRoute) {
    let child = route.firstChild;

    if (!child) {
      return route.snapshot.data['pageTitle'];
    }

    while (child.firstChild) {
      child = child?.firstChild;
    }

    return child.snapshot.data['pageTitle'];
  }
}
