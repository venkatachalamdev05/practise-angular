import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-behaviour-subject-b',
  templateUrl: './behaviour-subject-b.component.html',
  styleUrls: ['./behaviour-subject-b.component.css']
})
export class BehaviourSubjectBComponent {

  constructor(private service: SharedServiceService) { }

   ngOnInit(){
    this.service.authUser.subscribe(data=>{
      console.log("Component A Behaviour Subject : " + data);
    })
   }
}
