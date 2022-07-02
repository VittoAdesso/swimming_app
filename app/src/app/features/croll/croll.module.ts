import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrollRoutingModule } from './croll-routing.module';
import { CrollComponent } from './components/croll/croll.component';


@NgModule({
  declarations: [
    CrollComponent
  ],
  imports: [
    CommonModule,
    CrollRoutingModule,
  ]
})
export class CrollModule { }
