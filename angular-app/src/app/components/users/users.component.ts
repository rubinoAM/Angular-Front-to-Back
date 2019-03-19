import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  showExtended:boolean = true;
  loaded:boolean = false;
  enableAdd:boolean = true;
  currentClasses:{};
  currentStyles:{};

  constructor(){

  }

  ngOnInit(){ //Runs automatically when constructor is initialized
    setTimeout(()=>{
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
          image:'http://lorempixel.com/600/600/people/3',
          isActive:true,
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
          image:'http://lorempixel.com/600/600/people/2',
          isActive:false,
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
          image:'http://lorempixel.com/600/600/people/1',
          isActive:false,
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
          image:'http://lorempixel.com/600/600/people/4',
          isActive:true,
        },
      ];
  
      // this.addUser({
      //   firstName:'Gizmo',
      //   lastName:'Rubino',
        // age:10,
        // address:{
        //     street:'62 E Second St.',
        //     city:'Freeport',
        //     state:'NY',
        //     zip:11520,
        // },
      //});
      this.setCurrentClasses();
      this.setCurrentStyles();

      this.loaded = true;
    },2000);
  }

  addUser(user:User){
    this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success':this.enableAdd,
      'big-text':this.showExtended,
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px',
    }
  }
}
