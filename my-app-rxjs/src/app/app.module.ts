import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './operators/subject/subject.component';
import { SubjectAComponent } from './operators/subject/subject-a/subject-a.component';
import { SubjectBComponent } from './operators/subject/subject-b/subject-b.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    SubjectAComponent,
    SubjectBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
