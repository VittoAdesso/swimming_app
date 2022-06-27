import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//used lazyloading
const routes: Routes = [
  {
      path: `signup`, loadChildren: () =>
      import('./features/signup/signup.module').then(m => m.SignupModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
