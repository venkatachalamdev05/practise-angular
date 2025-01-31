import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-subject-b',
  templateUrl: './subject-b.component.html',
  styleUrls: ['./subject-b.component.css']
})
export class SubjectBComponent implements OnInit{
  constructor(private service: SharedServiceService) { }

  notification : string = "";

  ngOnInit(){
   this.service.notificationSubject.subscribe((data)=>{
    console.log(data);

     this.notification = data;
   })
  }
}
