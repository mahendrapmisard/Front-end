class Animal {
    constructor() {
        this.password = "mahi123@";
        this.username = "mahendra";
        this.islogged = true;
    }
}
class Dog extends Animal {
    userdetails() {
        console.log(this.username + " is the username and is " + this.islogged);
    }
}
const obj = new Dog();
obj.userdetails();
export {};
