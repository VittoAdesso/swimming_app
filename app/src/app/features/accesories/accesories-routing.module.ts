import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoriesComponent } from './components/accesories/accesories.component';

const routes: Routes = [
  { path: '', component: AccesoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoriesRoutingModule { }
