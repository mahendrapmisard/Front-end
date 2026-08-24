
// async function bank(deposit , withdraw, showbalance){



// } 

// function deposit(balance , depositAmount){
//     balance = balance+depositAmount;
//     return balance;
// }


// function purchase(username, itemtoorder){
// itemtoorder(username, addtocartfunc){
//     addtocartfunc(currentitem,updatethecart){
//         updatethecart()
//     }
// }
// }

// function one(value,func){
//     console.log("step one");
    
//     func(value);
// }

// function two(value, func){
//     console.log("step two");
//     func();
// }

// function three(value,func){
//     console.log("step three");
//     func();
// }

// one();

function user(callback) {
    setTimeout(() => {
        console.log("user is fetched");
        callback();
    }, 1500);
}

function selectitem(callback) {
    setTimeout(() => {
        console.log("item is added to cart");
        callback();
    }, 2000);
}

function orderconfirmed(callback) {
    setTimeout(() => {
        console.log("order is confirmed");
        callback();
    }, 4000);
}

function sentnotification(callback) {
    setTimeout(() => {
        console.log("sent email notification to user");
        callback();
    }, 3000);
}



// user(() => {
//     selectitem(() => {
//         orderconfirmed(() => {
//             sentnotification(() => {
//                 console.log("completed order");
//             });
//         });
//     });
// });

function downloadfile(calfn){
     let filename = "varanasimovie"
     console.log(`${filename} started downloading..............`);
     setTimeout(()=>{
        console.log("completed the download of the file");
        calfn();
     },10000);
}

function orderingheadset(calfn){
    let headsetname = "boat 510";
    console.log(`ordered the ${headsetname} headset in blinkit waiting for the delivery.....`);
    setTimeout(()=>{
        console.log("the head set blinkit is arraived");
        calfn();
    },8000)
}

function preapringsnacks(calfn){
    let snackname = "popcorn";
    console.log(`${snackname} making process is started and waiting for them to completely pop`);
    setTimeout(()=>{
        console.log("the head set blinkit is arraived");
        calfn();
    },2000)
}


function allworks(){
downloadfile(()=>{
    orderingheadset(()=>{
        preapringsnacks
})
}
);
}

// allworks();

async function getUser() {

    try {
        console.log("at await");
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const user = await response.json();

        console.log("User Name:", user.name);
        console.log("Email:", user.email);

    } catch (error) {
        console.log("Error:", error);
    }
}

// getUser();

function creds(userid){
    return new Promise((resolve, reject)=>{

        if(userid == 101){
            let user = {
                name : "mahendra",
                password : "mahendra123"
            }
            resolve(user)
        }
        else{
            reject("please enter correct user id");
        }

    })
}


creds(1).then((user)=>{
    console.log(`${user.name} is using ${user.password}`)
}).catch((msg)=>{
console.log(msg)
}
);