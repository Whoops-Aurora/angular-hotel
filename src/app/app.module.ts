import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { ExecutiveComponent } from './executive/executive.component';
import { StandardComponent } from './standard/standard.component';
import { SuiteComponent } from './suite/suite.component';


@NgModule({
  declarations: [
    AppComponent,
    ExecutiveComponent,
    StandardComponent,
    SuiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'executive',
        component: ExecutiveComponent
      },
      {
        path: 'standard',
        component: StandardComponent
      },
      {
        path: 'suite',
        component: SuiteComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
