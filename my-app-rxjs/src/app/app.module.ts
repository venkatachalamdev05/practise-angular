import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './operators/subject/subject.component';
import { SubjectAComponent } from './operators/subject/subject-a/subject-a.component';
import { SubjectBComponent } from './operators/subject/subject-b/subject-b.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    SubjectAComponent,
    SubjectBComponent,
    SwitchMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
