import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './core/components/layout/account/account.component';
import { DashboardComponent } from './core/components/layout/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, AccountComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
