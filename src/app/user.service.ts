import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class UserService {

  constructor(private messageService: MessageService) { }
  getUsersSync(): User[] {
    return USERS;
  }
  getUsers(): Observable<User[]> {

    this.messageService.add('UserService: fetched users');

    return of(USERS);
  }

  getUser(id: string): Observable<User> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(USERS.find(user => user._id === id));
  }
}