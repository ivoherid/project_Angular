import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userlist : any = [];
  constructor(private http: HttpClient, private router: Router) {

  }


  async getUserinfo() : Promise<User[]> {
    const data = await fetch(BASE_URL);
    return await data.json() ?? [];
  }

  submitregister(username:string, email:string, password:string) : Observable<User>{
    var newUser = <User>{}
    newUser.email = email;
    newUser.username = username;
    newUser.password = password;
    return this.http.post<User>(BASE_URL,newUser);
  }

  submitlogin(email:string, password:string){
    let userlist = this.getUserinfo();
    let validate = this.userlist.find((res:any) => res.email==email && res.password==password )
    return validate;
  }
}
