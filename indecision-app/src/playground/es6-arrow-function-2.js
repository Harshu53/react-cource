// argument object - no longer bound with arrwo function.

const add = function ( a, b ) {
    console.log(arguments);
    return a+b;
}
console.log(add(99,1));


/* const add1 = ( a, b ) {
    console.log(arguments);// For arrow function the arguments is not worked as arrow function not support the object arguemnts.
    return a+b;
}
console.log(add1(99,1)); */

// this keyword - no longer bound with arrow functions.
const user = {
    name : 'Harshal',
    cities : ['Burhanpur', 'Pune'],
    printPlacesLived() {
        return this.cities.map( (city) => this.name + ' has lived in ' +city );
        /* this.cities.forEach( (el) => {
            // here this. name gives error that can not read property name
            console.log(this.name + ' has lived in '  + el);
        } )  */

    }
}

console.log( user.printPlacesLived());

const multiplier = {
    numbers : [1,2,3],
    multiply(singleNum) {
        return this.numbers.map( (number) => number * singleNum );
    }
}

console.log(multiplier.multiply(2));
