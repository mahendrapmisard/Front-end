for(let i=0;i<5;i++){
    console.log("mahendra");
}

const table = value =>{
for(let i = 1; i<=10; i++){
    console.log(`${value} * ${i} = ${value*i}`)
}
}

table(90);


const firstUpper = value =>{
    const words = value.split(" ");

    result = "";
    for(i of words){
        for(j in i){
            if(j==0){
result = result+" "+(i[j]).toUpperCase();
            }
            else{
                result = result+(i[j])
            }
        }
    }

    return result;
}


let output = firstUpper("padigapati venkata mahendra reddy");
console.log(output);