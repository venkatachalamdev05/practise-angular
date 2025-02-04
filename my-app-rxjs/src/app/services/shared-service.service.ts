import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClient) { }

  notificationSubject = new Subject<string>()
  notificationBehaviourSubject = new BehaviorSubject<string>("")
  chatSubject = new ReplaySubject<string>(2);



  $notification = this.notificationSubject.asObservable();

  getData(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  searchData(value: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/users/search?q=${value}`)
  }
}
