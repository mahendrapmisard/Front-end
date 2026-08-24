class Misard {
    constructor(id, name, role, ISpermanent) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.ISpermanent = ISpermanent;
    }
    getuser() {
        console.log(`misard has ${this.name} who id is ${this.id} role ${this.role} and ispermanent${this.ISpermanent}`);
    }
}
const misardobj1 = new Misard(1, "madan", "ceo", true);
misardobj1.getuser();
let manager = {
    name: "Mahendra",
    salary: 50000,
    teamSize: 5
};
const user1 = {
    name: "Mahendra",
    age: 25
};
const user2 = {
    name: "Rahul",
    age: 30
};
let status = "success";
const user = {
    name: "Mahendra",
    role: "admin"
};
export {};
