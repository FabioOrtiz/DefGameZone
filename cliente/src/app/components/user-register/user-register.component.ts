import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import { UsersService} from '../../services/users.service'; 

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

  constructor(private userService: UsersService) { 

  }

  ngOnInit() {}

  saveNewUser(){
    this.userService.saveUser(this.user).subscribe(
      res=>{
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
