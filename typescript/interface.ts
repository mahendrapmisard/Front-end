export{}


interface user{
    id:number;
    name: string;
    role: string;
    ISpermanent : boolean;
    getuser():void
}

class Misard implements user{
id: number;


name: string;
role: string;
ISpermanent: boolean;

constructor(id:number,name:string,role:string,ISpermanent:boolean){
    this.id=id;
    this.name = name;
    this.role= role;
    this.ISpermanent = ISpermanent;
}

getuser(){
   console.log(`misard has ${this.name} who id is ${this.id} role ${this.role} and ispermanent${this.ISpermanent}`) 
}
}

const misardobj1 = new Misard(1,"madan","ceo",true);

misardobj1.getuser();



interface Person {
    name: string;
}

interface Employee {
    salary: number;
}

interface Manager extends Person, Employee {
    teamSize: number;
}

let manager: Manager = {
    name: "Mahendra",
    salary: 50000,
    teamSize: 5
};

type User = {
    name: string;
    age: number;
};

const user1: User = {
    name: "Mahendra",
    age: 25
};

const user2: User = {
    name: "Rahul",
    age: 30
};

type Status = "success" | "failed" | "pending";

let status: Status = "success";

type User1 = {
    name: string;
    role: "admin" | "user";
};

const user: User1 = {
    name: "Mahendra",
    role: "admin"
};