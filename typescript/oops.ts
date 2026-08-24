export{}
class Animal{
 legs :string = "four";

 type : string = "non human";

 hastails : number;

 constructor(hastails:number){
    this.hastails = hastails;
 }

 sound(): void{
    console.log("animal cant speek");
    console.log(this.legs);
    console.log(this.type);
}
}

const obj = new Animal(4);
obj.sound();
obj.legs;
obj.type;



// encapsulation and accessmodifiers
class Dogs extends Animal{

    private sounds = "barks";

    private name= "";

    constructor(tails:number){
        super(5)
    }

    setname(dogname:string){
        this.name= dogname;
    }
    getname(){
        return this.name;
    }
}

const mahidog = new Dogs(4);

mahidog.setname("jimmy");

let mahisdogname= mahidog.getname
console.log(mahisdogname)
mahidog.setname("jimmy");
console.log(mahidog.getname);



//inheritance

class Animal1 {
    eat() {
        console.log("Eating");
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log("Barking");
    }
}

class Puppy extends Dog1 {
    play() {
        console.log("Playing");
    }
}

const puppy = new Puppy();

puppy.eat();  
puppy.bark();  
puppy.play(); 


class Dog extends Animal{    
    nooflegs(){
        console.log(this.type);
}
}



class BankAccount {
    private balance: number = 1000;

    deposit(amount: number) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }
}

const account = new BankAccount();

account.deposit(500);
console.log(account.getBalance());



// abstraction

abstract class Animal2 {

    eat() {
        console.log("Animal eating");
    }

    abstract sound(): void;
}

class Cat extends Animal2 {

    override eat() {
        console.log("cat eating");
    }

    override sound() {
        console.log("meow");
    }
}

const catobj = new Cat();

catobj.eat();
catobj.eat();




interface Printable {
    print(): void;
}

abstract class Document {
    abstract save(): void;

    open() {
        console.log("Opening document");
    }
}

class PDF extends Document implements Printable {

    save() {
        console.log("Saving PDF");
    }

    print() {
        console.log("Printing PDF");
    }
}

const pdfobj = new PDF();

pdfobj.open();
pdfobj.print();
pdfobj.save();


// polymorphism


class CEO {
    work() {
        console.log("Animal sound");
    }
}

class manager extends CEO {
    work() {
        console.log("manages team");
    }
}

class teamlead extends CEO {
    work() {
        console.log("lead team");
    }
}


const  teamleadobj = new teamlead();
const managerobj = new manager();

teamleadobj.work();
managerobj.work();



// namesspaces

namespace MathUtils {

    export function add(a: number, b: number) {
        return a + b;
    }

    export function subtract(a: number, b: number) {
        return a - b;
    }
}

console.log(MathUtils.add(10, 20));
console.log(MathUtils.subtract(20, 10));