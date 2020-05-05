import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { ProcessComponent } from './components/process/process.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewallagentsComponent } from './components/viewallagents/viewallagents.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProcessComponent,
    EvaluationComponent,
    ViewallagentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialModule,
    FormsModule,
        ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
