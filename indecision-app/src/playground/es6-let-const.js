/* var nameVar = 'Harshal';
var nameVar = 'Mahajan';
console.log( 'nameVar', nameVar );

let nameLet = 'Kavish';
console.log( 'nameLet', nameLet );


const nameConst = 'KuKu';
console.log( 'nameConst', nameConst );

// Block scoping

const  fullName = 'Harshal Mahajan';
const firstname;

if(fullName) {
    firstname = fullName.split( ' ' )[0];
    console.log(firstname);
}


console.log(firstname); */


const firstName = (fullName) => fullName.split( ' ' )[0];

console.log( firstName('Mr.Harshal Mahajan') );