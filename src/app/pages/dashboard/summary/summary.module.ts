import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SummaryComponent
      }
    ])
  ]
})
export class SummaryModule { }