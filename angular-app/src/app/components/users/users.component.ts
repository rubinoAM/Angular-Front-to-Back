import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

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
  data:any;

  constructor(private _userService: UserService){}

  ngOnInit(){ //Runs automatically when constructor is initialized
    this._userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    this._userService.getData().subscribe(data => {
      console.log(data);
    });
  }

  onSubmit({value, valid}:{value:User,valid:boolean}){
    if(!valid){
      alert('Failure.');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this._userService.addUser(value);

      this.form.reset();
    }
  }
}
