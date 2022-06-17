import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User[] = [];
  private userSubject = new Subject<User[]>();

  constructor(private http : HttpClient) { }

  getUsers(){
    this.http.get(environment.serverUrl+'users').subscribe((data : any)=>{
      this.users = data as User[];
      this.userSubject.next([...this.users])
    })
  }

  getUserSubject() : Observable<User[]>{
    return this.userSubject.asObservable();
  }

  removeUser(id : number){
    this.users = this.users.filter(row=>row.id != id);
    this.userSubject.next([...this.users])
  }


}
