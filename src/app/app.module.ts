import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeDeatailsComponent } from './employee-deatails/employee-deatails.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes = [
  { path: '', component: EmployeeDeatailsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDeatailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
