import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import 'devextreme/data/odata/store';

import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser: User;
  showFilterRow: true;
  title = "";
  //users: User[];
  dataSource: any;


  constructor(private userService: UserService,
    private router: Router) {
      const SERVICE_URL = "api/users"; 

      
    this.dataSource = {
      store: {
        type: 'odata',
        url: 'api/users'
      },
      select: [
        '_id',
        'firstName',
        'lastName',
        'email'

      ],
      filter: ['firstName', '=', 'Bob']
    }

  }

  // getUsers(): void {
  //   this.userService.getUsers()
  //     .subscribe(users => this.users = users);
  // }

  ngOnInit() {
   // this.getUsers();
  }

  rowClickEvent(e, data) {
    let url = 'userdetail/' + data.data._id;
    this.router.navigate([url]);
  }

  // onCellPrepared(e) {
  //   if (e.rowType == "data") {
  //     let cell = e.cellElement;
  //     switch (e.column.command) {
  //       case "edit":
  //         // ...
  //         break;
  //       case "adaptive":
  //         // ...
  //         break;
  //       case "select":
  //         // ...
  //         break;
  //     }
  //   }
  // };

}
