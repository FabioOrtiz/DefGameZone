import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../services/users.service'; 
import {User} from '../../models/User';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: User ={
    nick: '',
    mail: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  updateUser(){

  }
}
