import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoriesRoutingModule } from './accesories-routing.module';
import { AccesoriesComponent } from './components/accesories/accesories.component';


@NgModule({
  declarations: [
    AccesoriesComponent  
  ],
  imports: [
    CommonModule,
    AccesoriesRoutingModule
  ]
})
export class AccesoriesModule { }
