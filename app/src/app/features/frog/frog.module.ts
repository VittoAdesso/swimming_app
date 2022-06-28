import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrogRoutingModule } from './frog-routing.module';
import { FrogComponent } from './components/frog/frog.component';


@NgModule({
  declarations: [
    FrogComponent
  ],
  imports: [
    CommonModule,
    FrogRoutingModule
  ]
})
export class FrogModule { }
