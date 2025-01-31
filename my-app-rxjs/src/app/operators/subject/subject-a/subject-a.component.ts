import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-subject-a',
  templateUrl: './subject-a.component.html',
  styleUrls: ['./subject-a.component.css']
})
export class SubjectAComponent {
  constructor(private service: SharedServiceService) { }
  send() {
    this.service.notificationSubject.next("New Notification : " + new Date().toLocaleString());
  }

}
