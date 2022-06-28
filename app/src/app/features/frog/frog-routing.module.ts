import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrogComponent } from './components/frog/frog.component';

const routes: Routes = [
  { path: '', component: FrogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrogRoutingModule { }
