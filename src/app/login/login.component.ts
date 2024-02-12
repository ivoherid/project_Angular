import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink, RouterModule } from '@angular/router';
import { User } from '../interface/user';
import { AuthService } from '../services/auth.service';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  userObj: User[] = [];
  userVal: User[] = [];
  authservice : AuthService = inject(AuthService);

  registrationform = new FormGroup({
    username: new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')
  });
  loginform = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  constructor(private http: HttpClient, private router: Router) {
    this.authservice.getUserinfo().then((res:any)=>{
      this.userObj = res;
      this.userVal = res;
    });
  }
  submitregistration(){
    let validate = this.userObj.find((res:any) => res.username==this.registrationform.value.username || res.email == this.registrationform.value.email)
    if(validate){
      alert('User Already Exist');
    }else{
      alert('Registration Successful');
      this.authservice.submitregister(
        this.registrationform.value.username ?? '',
        this.registrationform.value.email ?? '',
        this.registrationform.value.password ?? '',
      );
      this.router.navigateByUrl('');
    }
  }

  submitlogin(){
    // let validate=this.authservice.submitlogin(
    //   this.loginform.value.email ?? '',
    //   this.loginform.value.password ?? '',
    // );
    let validate = this.userObj.find((res:any) => res.email==this.loginform.value.email && res.password==this.loginform.value.password )
    if(!validate){
      alert('Invalid Email or Password!');
    }else{
      alert('login successful');
      this.router.navigateByUrl('');
    }
  }
}

