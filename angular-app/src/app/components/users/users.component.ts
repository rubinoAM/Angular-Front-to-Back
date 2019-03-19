import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(){

  }

  ngOnInit(){ //Runs automatically when constructor is initialized
    this.users = [
      {
        firstName:'Michael',
        lastName:'Rubino',
        age:27,
        address:{
            street:'62 E Second St.',
            city:'Freeport',
            state:'NY',
            zip:11520,
        },
      },
      {
        firstName:'Lisa',
        lastName:'Rubino',
        age:31,
        address:{
            street:'62 E Second St.',
            city:'Freeport',
            state:'NY',
            zip:11520,
        },
      },
      {
        firstName:'Christopher',
        lastName:'Rubino',
        age:49,
        address:{
            street:'62 E Second St.',
            city:'Freeport',
            state:'NY',
            zip:11520,
        },
      },
      {
        firstName:'Kimberly',
        lastName:'Rubino',
        age:45,
        address:{
            street:'62 E Second St.',
            city:'Freeport',
            state:'NY',
            zip:11520,
        },
      },
    ];

    this.addUser({
      firstName:'Gizmo',
      lastName:'Rubino',
      age:10,
      address:{
          street:'62 E Second St.',
          city:'Freeport',
          state:'NY',
          zip:11520,
      },
    });
  }

  addUser(user:User){
    this.users.push(user);
  }
}
