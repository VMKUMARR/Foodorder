import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='';
  password: string='';
  // isLoggedIn:boolean=false;
  
  constructor(private router:Router){
    
  }
  login(loginForm: NgForm){
    if(loginForm.valid){
      if(this.username== 'vipul' && this.password== '123')
      {
        // alert('Login successful')
        console.log('Login successful');
        this.router.navigate(['/home']);
        // this.setLoggedInStatus(true);
      }else{
        alert('login failed')
        console.log('login failed')
      }


    }
  }
  // private setLoggedInStatus(status: boolean){
  //   this.isLoggedIn = status;
  // }

}

