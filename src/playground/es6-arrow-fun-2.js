// Arguments in ES5 no longer bound
// this keyword n longer in ES6

function getNume(a, b) {
    console.log(arguments);
    console.log(a + b);
}
getNume(2, 1, 1);

const getNum = (a, b) => {
    //console.log(arguments);
    return a + b;
}
console.log(getNum(2, 1));



const user = {

    name:"ahmed",
    cities:['cairo', 'sudan', 'bhaac'],
    FindYourCity() {
        return this.cities.map((city) => this.name  + " has live in " + city );

    }

};

console.log(user.FindYourCity());


const multiplier = {
    numbers: [2, 3, 4, 1, 6, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
