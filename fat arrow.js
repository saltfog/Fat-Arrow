//Using the fat arrow

/* Traditional Function syntax */
var add0 = function(a, b) {
    return a + b;
};
console.log(add0(5,5));

/* arrow function syntax */
var add1 = (a, b) => {
    return a + b;
};
console.log(add1(5,5));

/* 
If the function's body has only the return statement, it can be written inline as follows
*/
var add2 = (a, b) => a + b;
console.log(add2(5,5));

/* A arrow function to increment a number */
var increment0 = (a) => a + 1;
console.log(increment0(4));

/*
If the function has only one input argument, it can be written inline as follows.
*/
var increment1 = a => a + 1;
console.log(increment1(4));


var square0 = function(num){
    return num ** 3;
};
console.log('A',square1(3));

/*
Fat Arrow 
*/
var square1 = num => num ** 3;
console.log('B', square(3));

/* 
More complex with "this"
*/
function Person(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
}
var p = new Person('Joe', 'Smith');
console.log(p);

var Person0 = (firstName) => this.firstName = firstName;
console.log(Person0('Jose'));