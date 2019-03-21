import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

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

export class UserComponent implements OnInit{
    //Properties
    /* firstName:string;
    lastName:string;
    age:number;
    address;
    foo:any;
    hasKids:boolean;
    numberArray:number[];
    stringArray:string[];
    mixedArray:any[];
    myTuple:[string,number,boolean]; */

    user:User;

    //Methods
    constructor(){
        /* this.firstName = 'Michael';
        this.lastName = 'Rubino';
        this.age = 27;
        this.address = {
            street: '62 E 2nd St.',
            city: 'Freeport',
            state: 'NY',
        }
        this.foo = 4;
        this.hasKids = false;
        this.numberArray = [4,10,3,6];
        this.stringArray = ['dog','fish','panda'];
        this.mixedArray = [false, 0, undefined, 'dodo'];
        this.myTuple = ['tuna',15,true]; //You can put more stuff in after the last condition has been met. Everything before that has to match, though.

        this.sayHello();
        console.log(this.age)
        this.hasBirthday()
        console.log(this.age)
        console.log(this.addNumbers(1,1)); */
    }

    ngOnInit(){
        this.user = {
            firstName:'Michael',
            lastName:'Rubino',
            email:'airmikey12@aol.com',
        }
    }

    /* sayHello(){
        console.log(`Howdy, ${this.firstName}!`);
    } */

    /* hasBirthday(){
        this.age += 1;
    } */

    /* addNumbers(num1:number, num2:number): number{
        return num1 + num2
    } */
}