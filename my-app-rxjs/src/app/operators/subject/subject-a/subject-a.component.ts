import { Component } from '@angular/core';
import { bufferCount, pipe, scan, takeLast } from 'rxjs';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-subject-a',
  templateUrl: './subject-a.component.html',
  styleUrls: ['./subject-a.component.css']
})
export class SubjectAComponent {
  constructor(private service: SharedServiceService) { }

  ngOnInit() {
    this.service.chatSubject.next('Message 1');
    this.service.chatSubject.next('Message 2');
    this.service.chatSubject.next('Message 3');
    this.service.chatSubject.next('Message 4');
    this.service.chatSubject.pipe(
      scan((acc: string[], msg: string) => [...acc.slice(-2), msg], [])
    ).subscribe((msg: any) => {
      console.log('New User:', msg);
      this.messages = msg;
    });

  }

  messages: string[] = [];
  newMessage: string = '';


  send() {
    this.service.notificationSubject.next("New Notification : " + new Date().toLocaleString());
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.service.chatSubject.next(this.newMessage);
      this.newMessage = ''; // Clear input after sending
    }
  }

}
