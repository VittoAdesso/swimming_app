import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButterflyRoutingModule } from './butterfly-routing.module';
import { ButterflyComponent } from './components/butterfly/butterfly.component';


@NgModule({
  declarations: [
    ButterflyComponent
  ],
  imports: [
    CommonModule,
    ButterflyRoutingModule
  ]
})
export class ButterflyModule { }
