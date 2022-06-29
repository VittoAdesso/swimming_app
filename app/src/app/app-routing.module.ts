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
    // {
    //   path: `user`, loadChildren: () =>
    //     import('./features/user-profile/user-profile.module').then(m => m.UserProfileModule),
    //     canActivate: [AuthGuard]
    // },
    {
      path: `back`, loadChildren: () =>
        import('./features/back/back.module').then(m => m.BackModule),
        //if i want to be logged. 
        canActivate: [AuthGuard]
    },
    {
      path: `croll`, loadChildren: () =>
        import('./features/croll/croll.module').then(m => m.CrollModule),
        // canActivate: [AuthGuard]
    },
    {
      path: `butterfly`, loadChildren: () =>
        import('./features/butterfly/butterfly.module').then(m => m.ButterflyModule),
        canActivate: [AuthGuard]
    },
    {
      path: `frog`, loadChildren: () =>
        import('./features/frog/frog.module').then(m => m.FrogModule),
        canActivate: [AuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
