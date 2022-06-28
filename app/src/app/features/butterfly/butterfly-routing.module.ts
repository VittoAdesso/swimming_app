import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButterflyComponent } from './components/butterfly/butterfly.component';

const routes: Routes = [
  { path: '', component: ButterflyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButterflyRoutingModule { }
