import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  user:User = {
    firstName:'',
    lastName:'',
    email:'',
    /* age:null,
    address:{
      street:'',
      city:'',
      state:'',
      zip:null,
    } */
  };
  showExtended:boolean = true;
  loaded:boolean = false;
  enableAdd:boolean = false;
  showUserForm:boolean = false;

  constructor(){

  }

  ngOnInit(){ //Runs automatically when constructor is initialized
    setTimeout(()=>{
      this.users = [
        {
          firstName:'Michael',
          lastName:'Rubino',
          email:'mrubino@rubinofamily.com',
          /* age:27,
          address:{
              street:'62 E Second St.',
              city:'Freeport',
              state:'NY',
              zip:11520,
          }, */
          // image:'http://lorempixel.com/600/600/people/3',
          isActive:true,
          // balance:100.00,
          registered: new Date('03/18/2018 08:30:00'),
          hide: true,
        },
        {
          firstName:'Lisa',
          lastName:'Rubino',
          email:'lrubino@rubinofamily.com',
          /* age:31,
          address:{
              street:'62 E Second St.',
              city:'Freeport',
              state:'NY',
              zip:11520,
          }, */
          // image:'http://lorempixel.com/600/600/people/2',
          isActive:false,
          // balance:50.00,
          registered: new Date('03/19/2018 08:30:00'),
          hide: true,
        },
        {
          firstName:'Christopher',
          lastName:'Rubino',
          email:'crubino@rubinofamily.com',
          /* age:49,
          address:{
              street:'62 E Second St.',
              city:'Freeport',
              state:'NY',
              zip:11520,
          }, */
          // image:'http://lorempixel.com/600/600/people/1',
          isActive:false,
          // balance:50.00,
          registered: new Date('03/19/2018 08:30:00'),
          hide: true,
        },
        {
          firstName:'Kimberly',
          lastName:'Rubino',
          email:'krubino@rubinofamily.com',
          /* age:45,
          address:{
              street:'62 E Second St.',
              city:'Freeport',
              state:'NY',
              zip:11520,
          }, */
          // image:'http://lorempixel.com/600/600/people/4',
          isActive:true,
          // balance:50.00,
          registered: new Date('03/19/2018 08:30:00'),
          hide: true,
        },
      ];

      this.loaded = true;
    },2000);
  }

  addUser(){
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.push(this.user);
    this.user = {
      firstName:'',
      lastName:'',
      email:'',
      /* age:null,
      address:{
        street:'',
        city:'',
        state:'',
        zip:null,
      } */
    }
  }

  onSubmit(e){
    e.preventDefault();
    console.log(e);
  }

  fireEvent(e){
    console.log(e.target.value);
  }
}
