import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

//used lazyloading
const routes: Routes = [
  {
      path: `signup`, loadChildren: () =>
      import('./features/signup/signup.module').then(m => m.SignupModule)
    },
    {
      path: `signin`, loadChildren: () =>
        import('./features/signin/signin.module').then(m => m.SigninModule)
    },
    {
      path: `user`, loadChildren: () =>
        import('./features/user-profile/user-profile.module').then(m => m.UserProfileModule),
        canActivate: [AuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
