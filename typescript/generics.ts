export{}


function identity<T>(value: T): T {
    return value;
}

identity<string>("Mahendra");
identity<number>(100);
identity<boolean>(true);


class Storage<T> {

    constructor(private value: T) {}

    getValue(): T {
        return this.value;
    }
}

const s1 = new Storage<string>("Hello");
const s2 = new Storage<number>(100);

console.log(s1.getValue());
console.log(s2.getValue());


interface Response<T> {
    data: T;
    status: number;
}

const response: Response<string> = {
    data: "Success",
    status: 200
};

const response2: Response<number> = {
    data: 100,
    status: 200
};
