
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
console.log('A',square0(3));

/*
Fat Arrow
*/
var square1 = num => num ** 3;
console.log('B', square1(3));

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

/*
using a reference to function's this
*/
function Person1(firstName, lastName) {
    var that = this;

    that.firstName = firstName;
    setTimeout(function() {
        that.lastName = lastName;
    }, 1000);
}
Person1('John', 'Smith');


/*
using bind to set proper this binding
*/
function Person2(firstName, lastName) {
    this.firstName = firstName;

    var assignLastName = (function() {
        this.lastName = lastName;
    }).bind(this);
    setTimeout(assignLastName, 1000);
}
Person2('John', 'Smith');

/*
Now with fat arrow
*/
function Person3(firstName, lastName) {
    this.firstName = firstName;
    setTimeout(() => {
        this.lastName = lastName;
    }, 1000);
}

/*
Code Abstraction
*/

const add = (a,b) => a + b;

const a = add(2,2);
const b = add(a,2);
const c = add(b,2);
console.log(a);
console.log(b);
console.log(c);

/*
Curry the add function
*/

const addCurry = a => b => a + b;
const inc = addCurry(1);

// This const a = add(2,2); to const x = inc(1);
const x = inc(1); //3
const y = inc(x); //4
const z = inc(y); //5

console.log(inc(x));
console.log(inc(y));
console.log(inc(z));


const mockData =
[{"id":1,"first_name":"Giselbert","last_name":"Blenkensop","email":"gblenkensop0@bloomberg.com","gender":"Male","ip_address":"145.181.7.23"},
{"id":2,"first_name":"Aaren","last_name":"Klampk","email":"aklampk1@hao123.com","gender":"Female","ip_address":"71.250.156.222"},
{"id":3,"first_name":"Moshe","last_name":"Daffey","email":"mdaffey2@phoca.cz","gender":"Male","ip_address":"217.122.138.81"},
{"id":4,"first_name":"Early","last_name":"Barthot","email":"ebarthot3@state.tx.us","gender":"Male","ip_address":"39.45.238.249"},
{"id":5,"first_name":"Tabina","last_name":"Le Noury","email":"tlenoury4@toplist.cz","gender":"Female","ip_address":"104.162.42.169"},
{"id":6,"first_name":"Carling","last_name":"Gaywood","email":"cgaywood5@tiny.cc","gender":"Male","ip_address":"31.54.62.32"},
{"id":7,"first_name":"Farleigh","last_name":"Guerriero","email":"fguerriero6@guardian.co.uk","gender":"Male","ip_address":"71.182.61.234"},
{"id":8,"first_name":"Beniamino","last_name":"Roberts","email":"broberts7@gravatar.com","gender":"Male","ip_address":"226.129.24.216"},
{"id":9,"first_name":"Corliss","last_name":"Clapton","email":"cclapton8@deviantart.com","gender":"Female","ip_address":"30.92.2.38"},
{"id":10,"first_name":"Vasily","last_name":"Darch","email":"vdarch9@cnet.com","gender":"Male","ip_address":"0.251.72.106"},
{"id":11,"first_name":"Derrik","last_name":"Oxnam","email":"doxnama@hubpages.com","gender":"Male","ip_address":"210.130.141.234"},
{"id":12,"first_name":"Mathian","last_name":"Heckle","email":"mheckleb@ft.com","gender":"Male","ip_address":"193.238.240.90"},
{"id":13,"first_name":"Brinna","last_name":"Glusby","email":"bglusbyc@imgur.com","gender":"Female","ip_address":"59.24.151.72"},
{"id":14,"first_name":"Noelani","last_name":"Cleminson","email":"ncleminsond@buzzfeed.com","gender":"Female","ip_address":"109.249.128.90"},
{"id":15,"first_name":"Rey","last_name":"Krikorian","email":"rkrikoriane@buzzfeed.com","gender":"Female","ip_address":"75.41.223.12"},
{"id":16,"first_name":"Gabe","last_name":"McCoole","email":"gmccoolef@linkedin.com","gender":"Male","ip_address":"53.214.86.210"},
{"id":17,"first_name":"Abbey","last_name":"Gibbonson","email":"agibbonsong@businessinsider.com","gender":"Female","ip_address":"175.56.223.99"},
{"id":18,"first_name":"Moina","last_name":"Syddall","email":"msyddallh@dell.com","gender":"Female","ip_address":"199.188.151.191"},
{"id":19,"first_name":"Ivor","last_name":"Hamlet","email":"ihamleti@diigo.com","gender":"Male","ip_address":"203.37.23.49"},
{"id":20,"first_name":"Gabriello","last_name":"Manifield","email":"gmanifieldj@opera.com","gender":"Male","ip_address":"126.57.215.41"}];

document.getElementById("app").innerHTML = `
  <h4 class="app-title">Person: (${mockData.length} results)</h4>`;
