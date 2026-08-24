let names = ["mahendra", "madan", "giridhar", "vamsi"];
names.push("misard");
function printnames(names) {
    for (let i of names) {
        console.log(i);
    }
}
printnames(names);
console.log(names.length);
names.pop();
console.log(names.length);
printnames(names);
let orderdetails = ["mahendra", "vivo phone", 1, true];
for (let i of orderdetails) {
    console.log(i);
}
var status;
(function (status) {
    status[status["success"] = 0] = "success";
    status[status["error"] = 1] = "error";
    status[status["pending"] = 2] = "pending";
})(status || (status = {}));
console.log(status.pending);
export {};
