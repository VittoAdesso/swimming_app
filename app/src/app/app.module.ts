import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/services/interceptors/authconfig.interceptor';
import { CrollComponent } from './features/croll/components/croll/croll.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    //to make petitions
    HttpClientModule
    
  ],
  providers: [
    {
      // to use & intercept urls with token is a class
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
