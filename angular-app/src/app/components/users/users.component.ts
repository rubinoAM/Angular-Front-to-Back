import { Component, OnInit, ViewChild } from '@angular/core';
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
  };
  showExtended:boolean = true;
  loaded:boolean = false;
  enableAdd:boolean = false;
  showUserForm:boolean = false;
  @ViewChild('userForm') form:any;

  constructor(){

  }

  ngOnInit(){ //Runs automatically when constructor is initialized
    setTimeout(()=>{
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

      this.loaded = true;
    },2000);
  }

  onSubmit({value, valid}:{value:User,valid:boolean}){
    if(!valid){
      alert('BARK');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    }
  }

  fireEvent(e){
    console.log(e.target.value);
  }
}
