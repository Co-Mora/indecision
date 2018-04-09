
class Person {

    constructor(name = "unknown", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return "Hi I am " + this.name;
    }

    getDescription() {
        return this.name + ' is ' + this.age + ' year(s) old.';
    }
}


class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major =major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let des = super.getDescription();

        if(this.hasMajor()) {

            des += ' their major is ' + this.major;
        }

        return des;
    }
}


class Traveler extends Person {

    constructor(name, homeLocation) {
        super(name);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation; // no homeLocation means undefined !!undefined -> False
    }

    getGreeting() {

        let greet = super.getGreeting();

        if(this.hasHomeLocation()) {

            greet += " I'm visiting from " + this.homeLocation;

        }

        return greet;
    }
}

const person1 = new Student("Andrew Smith", 26);
console.log(person1.hasMajor());
const person2 = new Student("Omar", 24, "Computer Science");
console.log(person2.getDescription());

const traveler1 = new Traveler("Andrew", "New York");
console.log(traveler1.getGreeting());


const traveler2 = new Traveler("Andrew");
console.log(traveler2.getGreeting());

