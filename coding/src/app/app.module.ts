import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {   ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListviewComponent } from './listview/listview.component';

const routes: Routes = [
  { path: 'listview', component: ListviewComponent },
  { path: '', component: LoginComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListviewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
