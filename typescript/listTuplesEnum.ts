export{}
let names:string[] = ["mahendra", "madan", "giridhar","vamsi"]

names.push("misard");


function printnames(names: string[]){
for(let i of names){
    console.log(i)
}
}

printnames(names);
console.log(names.length)

names.pop();
console.log(names.length)

printnames(names);

let orderdetails:[string,string,number,boolean] = ["mahendra" , "vivo phone",1,true]

for(let i of orderdetails){
    console.log(i)
}

enum status{
    "success",
    "error",
    "pending"
}

console.log(status.pending);