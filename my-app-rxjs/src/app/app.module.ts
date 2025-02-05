import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './operators/subject/subject.component';
import { SubjectAComponent } from './operators/subject/subject-a/subject-a.component';
import { SubjectBComponent } from './operators/subject/subject-b/subject-b.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviourSubjectAComponent } from './operators/subject/behaviour-subject-a/behaviour-subject-a.component';
import { BehaviourSubjectBComponent } from './operators/subject/behaviour-subject-b/behaviour-subject-b.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    SubjectAComponent,
    SubjectBComponent,
    SwitchMapComponent,
    BehaviourSubjectAComponent,
    BehaviourSubjectBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
