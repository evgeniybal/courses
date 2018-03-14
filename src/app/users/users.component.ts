import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser: User;
  showFilterRow: true;  
  title = "";
  users: User[];
  user: User = {
    _id: '1',
    firstName: 'First User',
    lastName: 'Test',
    email: 'test@mail.com',
    phone: '0634567654'
  };


  constructor(private userService: UserService) { }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }


}
