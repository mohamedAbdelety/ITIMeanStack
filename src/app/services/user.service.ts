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
    if(this.users.length == 0){
      this.http.get(environment.serverUrl+'users').subscribe((data : any)=>{
        this.users = this.users.concat(data as User[]);
        this.userSubject.next([...this.users])
      })
    }else{
      this.userSubject.next([...this.users])
    }
  }

  addUser(user : User){
    user.id = this.users.length + 1;
    this.users.push(user)
    this.userSubject.next([...this.users]);
  }

  getUserSubject() : Observable<User[]>{
    return this.userSubject.asObservable();
  }

  removeUser(id : number){
    this.users = this.users.filter(row=>row.id != id);
    this.userSubject.next([...this.users])
  }

  getUserById(id : number) : string{
    return this.users.filter(row=>row.id == id)[0]?.name;
  }


}
