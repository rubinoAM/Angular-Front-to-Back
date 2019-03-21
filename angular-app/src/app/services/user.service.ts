import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[];
  data:Observable<any>;

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

  getData(){
    this.data = new Observable(observer => {
      setTimeout(()=>{
        observer.next(1);
      },1000)

      setTimeout(()=>{
        observer.next(2);
      },2000)

      setTimeout(()=>{
        observer.next(3);
      },3000)

      setTimeout(()=>{
        observer.next(4);
      },4000)
    });

    return this.data;
  }

  getUsers():Observable<User[]>{
    return of(this.users);
  }

  addUser(user:User){
    this.users.unshift(user);
  }
}