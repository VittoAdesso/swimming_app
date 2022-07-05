import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrowComponent } from './components/arrow/arrow.component';

const routes: Routes = [
  { path : '', component: ArrowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrowRoutingModule { }
