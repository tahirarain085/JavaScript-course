

// var currencyOne = 100;
// var currencyTwo = 0;
// exchangeRate = 1.2;


// function convertCurrency(amount,rate){
//     return amount * rate
// }

// currencyTwo = convertCurrency(currencyOne,exchangeRate)

// console.log(currencyTwo)

var counter = 3;
function myDay(){
    console.log(counter);
    counter = counter -1;
    if(counter === 0) return;

    myDay()
}
myDay()