const students = [	
{	
id: 1,	
name: "JOHN",	
age: 22,	
marks: 85,	
skills: ["javascript", "Angular","html"]	
},	
{	
id: 2,	
name: "PETER",	
age: 21,	
marks: 92,	
skills: ["c sharp", "asp"]	
}	
];	

const employees = [	
{	
employeeId: 101,	
name: "Alice Johnson",	
department: "HR",	
salary: 55000	
},	
{	
employeeId: 102,	
name: "Bob Smith",	
department: "IT",	
salary: 70000	
},	
{	
employeeId: 103,	
name: "Charlie Brown",	
department: "Finance",	
salary: 65000	
}	
];	

const products = [	
{	
productId: "P001",	
productName: "Laptop",	
price: 750,	
stock: 25	
},	
{	
productId: "P002",	
productName: "Mouse",	
price: 20,	
stock: 150	
},	
{	
productId: "P003",	
productName: "Keyboard",	
price: 45,	
stock: 80	
}	
];	



console.log("----------------foreach---------------------------------------")



employees.forEach((element,index , array) => {
    console.log(`${index+1} ${element.name} has ${element.salary} working in ${element.department} department from total of ${array.length} employees`)
});


console.log("----------------concat with array---------------------------------------")

combinedarray = students.concat(employees,products);

console.log(combinedarray)

combinedarray.forEach(element => {
    console.log(`${element.name}`)
});



console.log("----------------concat with the string-------------------------------------")

firstname="Mahendra ";
lastname="Padigapati";

fullname = lastname.concat(firstname);

console.log(fullname)


console.log("----------------join---------------------------------------")

names= ['mahendra','giridhar','madan','vamsi','pavithra',"supraja","kavya","pujitha"]

let misardians = names.join(' , ');

console.log(misardians)


let employee1Skills = students[0].skills;
let skills = employee1Skills.join(" - ");

console.log(skills);