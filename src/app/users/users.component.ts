import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser: User;
  title = "";
  users= USERS;
  user: User ={
    _id:'1', 
    firstName:'First User',
     lastName:'Test',
      email:'test@mail.com',
      phone: '0634567654'
  };
  

  constructor() { }

  ngOnInit() {
  
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
