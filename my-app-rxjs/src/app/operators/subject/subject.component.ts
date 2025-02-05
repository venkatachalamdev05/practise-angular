import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent{
  constructor(private service: SharedServiceService) { }
  login(){
    this.service.login()
  }

  logout(){
    this.service.logout()
  }
}
