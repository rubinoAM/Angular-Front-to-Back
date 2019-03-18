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
    address = {
        street: '62 E 2nd St.',
        city: 'Freeport',
        state: 'NY',
    }

    //Methods
    constructor(){
        this.sayHello()
        /* console.log(this.age)
        this.hasBirthday()
        console.log(this.age) */
    }

    sayHello(){
        console.log(`Howdy, ${this.firstName}!`);
    }

    hasBirthday(){
        this.age += 1;
    }
}