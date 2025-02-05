import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-behaviour-subject-a',
  templateUrl: './behaviour-subject-a.component.html',
  styleUrls: ['./behaviour-subject-a.component.css']
})
export class BehaviourSubjectAComponent {
 constructor(private service: SharedServiceService) { }

 ngOnInit(){
  this.service.authUser.subscribe(data=>{
    console.log("Component A Behaviour Subject : " + data);
  })
 }

}
