import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    //template: '<h2>Michael Rubino</h2>',
    /*styles: [
        h2{
            color: chartreuse;
        }
    ],*/
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})

export class UserComponent {
    //Properties
    firstName:string = 'Michael';
    lastName:string = 'Rubino';
    age:number = 27;

    //Methods
    constructor(){
        console.log('Howdy, User!');
    }
}