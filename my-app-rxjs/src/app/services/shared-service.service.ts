import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClient) { }

  notificationSubject = new Subject<string>()

  getData(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
