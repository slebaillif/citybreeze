import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatNativeDateModule, MatDatepickerModule, MatIconModule,
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
  MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LandingComponent} from './landing/landing.component';
import {AppRoutingModule} from './app.routing';
import {FooterComponent} from './footer/footer.component';
import {RegisterComponent} from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule, MatDatepickerModule, MatIconModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule,
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatStepperModule, HttpClientModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule, MatDatepickerModule, MatIconModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule,
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
