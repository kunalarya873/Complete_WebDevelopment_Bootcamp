// const Student = {
//     name : 'Kunal Arya',
//     marks : 22,
//     printMarks: function(){
//         console.log(this.marks);
//     },
// };


class Users{
    name(name){
        this.name = name;
    }
    email(email){
        this.email = email;
    }
    viewDetails(){
        console.log(`Name : ${this.name} , Email : ${this.email}`);
    }
}

class Admin extends Users{
    

}

let user1 = new Users();
user1.name("John Doe");
user1.email("afa@gniwe.com")
//console.log(user1.name);
console.log(user1.viewDetails());


function hello(){
    console.log('Hello');
};
console.log("1");
console.log("2");
setTimeout(hello, 10000);
console.log("3");
console.log("4");



