// import {apikey} from './util.js';
// import {apikey, apiK as content} from './util.js';
import * as util from "./util.js";

import api from './util.js';

console.log(api);
console.log(apiK);
console.log(apikey);

// console.log(util.default);
// console.log(util.apiK);

// function greetUser(username, message="Hello"){
//     console.log(message);
//     console.log(username);
// }

// greetUser("Ram");

// function createGreeting(userName, message="Hello"){
//     return "Hi! I am " + userName + ". " + message;
// }


// const greet = createGreeting("Soumya");
// console.log(greet);

// export default (username, message) => {
//     console.log("Hello");
//     return username + " " + message;
// }

const user = {
    name: 'Max',
    age: 23,
    greet(){
        console.log("Hello");
        console.log(this.age);
    }
}

console.log(user);
user.greet();

//create blueprint
class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hii");
    }
}

const user1 = new User("Manuel", 35);
console.log(user1.name);

const hobbies = ["Balling", "Fielding", "Volleyball" ];
console.log(hobbies[1]);
hobbies.push("Badminton");
console.log(hobbies);

const index = hobbies.find((item)=>{
    return item === "Balling";
})

console.log(index);

const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);

const newHobbies = hobbies.map((item) =>  ({text: item}));
console.log(newHobbies);


//destructuring arrays and objects
const userNameData = ["Max", "Maddy"];

//here firstName and lastName can be extracted using array index
// const firstName = userNameData[0];
// const lastName = userNameData[1];
// console.log(firstName, lastName);


//using destructuring the above can be achieved
// const [firstName, lastName] = ["Max", "Maddy"];

// console.log(firstName, lastName);

//Destructuring can also be used for objects
const usr = {
    name: "Max",
    age: 26
};

// const name = usr.name;
// const age = usr.age;

// console.log(name, age);

//For destructuring of objects, need to pulled out by property name
const {name: userName, age} = {
    name: 'Max',
    age: 34
}

console.log(userName, age);

//function destructuring
// function storeOrder({id, currency}) { // destructuring
//     localStorage.setItem('id', id);
//     localStorage.setItem('currency', currency);
// }

//spread order
const newHobbies1 = ['Reading'];

// const mergedHobbies = [hobbies, newHobbies];
// console.log(mergedHobbies);

const mergedHobbies = [...hobbies, ...newHobbies1];
console.log(mergedHobbies);

const extendedUser = {
    isAdmin: true,
    ...usr
};

console.log(extendedUser);

//pass functions as values to other functions
function handleTimeout(){
    console.log("timeout");
}

const timeout2 = () => {
    console.log("Timed out...again");
}

setTimeout(handleTimeout, 2000);

function greeter(greetFn){
    greetFn();
}

// greeter(()=> console.log("Hi"));

//function inside function
function init(){
    function greet(){
        console.log("hide");
    }

    greet();
}

greet();