import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClient) { }

  notificationSubject = new Subject<string>()

  $notification = this.notificationSubject.asObservable();

  getData(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  searchData(value: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/users/search?q=${value}`)
  }
}
