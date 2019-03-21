import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service';

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

  constructor(private _dataService: DataService){}

  ngOnInit(){ //Runs automatically when constructor is initialized
    this.loaded = true;
    this.users = this._dataService.getUsers();
  }

  onSubmit({value, valid}:{value:User,valid:boolean}){
    if(!valid){
      alert('Failure.');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this._dataService.addUser(value);

      this.form.reset();
    }
  }
}
