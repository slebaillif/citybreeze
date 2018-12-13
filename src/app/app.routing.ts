import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LandingComponent} from './landing/landing.component';
import {RegisterComponent} from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [BrowserAnimationsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
