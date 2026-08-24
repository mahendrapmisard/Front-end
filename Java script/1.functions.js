
// debugger;
let name = "mahendra";
const pi = 3.14;
console.log(name);



// debugger;
function bonusCalculator(value){
console.log(value);
}


// debugger;
let printname = function(name){
console.log(`${name} is your name` );
}

// debugger;
printname("mahendra");


// debugger;
bonusCalculator(100);


console.log("end");




function named(){
    console.log("this is named fucntion");
}

named();

const Anonymousfunction = function(){
console.log("unnamed function");
}

Anonymousfunction();

const arrowfunction = (name)=>{
    console.log(`arrow fucntion ${name}`);
}

arrowfunction("calling the arrow function");


setTimeout(()=>{
arrowfunction("mahendra")
}, 5000);

for(let i=0;i <=50;i++){
    if(i==3){
        console.log("three");
    continue;
    }
    else if(i==8){
break;
    }
    else
        console.log(i)
}





function calculator(value1, value2, callback){
    let output = callback(value1,value2);
    console.log(output);
}

function add(value1, value2){
    return value1+value2;
}
calculator(50,60,add);

function sub(value1, value2){
    return value1 - value2;
}
calculator(150,60,sub);


