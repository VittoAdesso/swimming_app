import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrollComponent } from './components/croll/croll.component';

const routes: Routes = [
  { path: '', component: CrollComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrollRoutingModule { }
