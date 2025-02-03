import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent {
  searchControl = new FormControl();
  constructor(private service: SharedServiceService) { }
  users :any = [];
  ngOnInit() {
    this.searchControl.valueChanges.pipe(debounceTime(500),
    switchMap(item => this.service.searchData(item))).subscribe(data => {
      console.log(data);
      this.users = data.users
    })
  }
}
