function identity(value) {
    return value;
}
identity("Mahendra");
identity(100);
identity(true);
class Storage {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const s1 = new Storage("Hello");
const s2 = new Storage(100);
console.log(s1.getValue());
console.log(s2.getValue());
const response = {
    data: "Success",
    status: 200
};
const response2 = {
    data: 100,
    status: 200
};
export {};
