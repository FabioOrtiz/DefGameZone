import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import { UsersService} from '../../services/users.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user: User ={
    nick: '',
    mail: '',
    password: ''
  };

  constructor(private userService: UsersService, private router: Router) { 

  }

  ngOnInit() {}

  saveNewUser(){
    this.userService.saveUser(this.user).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['./login']);
      },
      err => console.error(err)
    )
  }

}
