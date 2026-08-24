export{};

class Animal{
    private password : string  = "mahi123@";
    username : string = "mahendra";
    protected islogged : boolean = true;
}

class Dog extends Animal{

    userdetails():void{
console.log(this.username+" is the username and is "+this.islogged );
    }
}


const obj = new Dog();

obj.userdetails();



