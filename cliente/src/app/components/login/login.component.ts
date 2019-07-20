import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import { UsersService} from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User ={
    nick: '',
    mail: '',
    password: ''
  };

  constructor(private userService: UsersService, private router: Router) { 

  }

  ngOnInit() {}

  checkRegister(){
    this.userService.checkUser(this.user.nick,this.user.password).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['./library/',this.user.nick]);
      },
      err => console.error(err)
    )
  }

}
