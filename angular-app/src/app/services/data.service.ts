import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:User[];

  constructor(){
    this.users = [
      {
        firstName:'Michael',
        lastName:'Rubino',
        email:'mrubino@rubinofamily.com',
        isActive:true,
        registered: new Date('03/18/2018 08:30:00'),
        hide: true,
      },
      {
        firstName:'Lisa',
        lastName:'Rubino',
        email:'lrubino@rubinofamily.com',
        isActive:false,
        registered: new Date('03/19/2018 08:30:00'),
        hide: true,
      },
      {
        firstName:'Christopher',
        lastName:'Rubino',
        email:'crubino@rubinofamily.com',
        isActive:false,
        registered: new Date('03/19/2018 08:30:00'),
        hide: true,
      },
      {
        firstName:'Kimberly',
        lastName:'Rubino',
        email:'krubino@rubinofamily.com',
        isActive:true,
        registered: new Date('03/19/2018 08:30:00'),
        hide: true,
      },
    ];
  }

  getUsers():User[]{
    return this.users;
  }

  addUser(user:User){
    this.users.unshift(user);
  }
}