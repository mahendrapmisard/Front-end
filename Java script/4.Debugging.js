function calextra(a, b) {

//   debugger;
  let result = a + b;
    return result;
}

function calculateTotal(salary, months,extra) {
    let subtotal = salary * months;
    let totalextra = calextra(months,extra);
    // debugger;
    let total = subtotal + totalextra;

    return total;
}

function main() {
    let salary = 10000;
    let months = 18;
    let extra = 500;
    // debugger;

    let finalAmount = calculateTotal(salary, months,extra);

    console.log("Final Amount:", finalAmount);
}

main();
