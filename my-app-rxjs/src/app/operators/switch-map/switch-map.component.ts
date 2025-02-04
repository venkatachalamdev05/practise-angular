import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, finalize, fromEvent, Subject, switchMap, takeUntil } from 'rxjs';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent {
  searchControl = new FormControl();
  constructor(private service: SharedServiceService) { }
  users: any = [];
  private destroy$ = new Subject<void>();
  ngOnInit() {
    this.searchControl.valueChanges.pipe(debounceTime(500),
      switchMap(item => this.service.searchData(item))).subscribe(data => {
        console.log(data);
        this.users = data.users
      })


    const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');

    mouseMove$.pipe(
      takeUntil(this.destroy$),
      finalize(() => {
        console.log('Observable completed')
      })
    ).subscribe(event => {
      console.log('Mouse Position:', event.clientX, event.clientY);
    });
  }

  ngOnDestroy(){
    this.destroy$.next();
  }
}
