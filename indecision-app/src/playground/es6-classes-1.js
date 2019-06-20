class Person {
    constructor(name = 'Anonmymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `I am ${this.name}.`;
    }

    getDescription() {
        return `My age is ${this.age}`;
    }

}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        } 

        return description;
    }
}

class Traveller extends Student {
    constructor(name, age, major, homeloaction) {
        super(name, age, major);
        this.homeloaction = homeloaction;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeloaction) {
            greeting += ` I'm visiting from ${this.homeloaction}`;
        }

        return greeting;
    }
}

const me = new Traveller('Harshal Mahajan', 30, 'Computer Science', 'Burhanpur');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());