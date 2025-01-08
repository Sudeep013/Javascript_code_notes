const student = {
    name  : "Vishal",
    age : 21,
    marks : 80,
    result : () => {
        console.log(`Name : ${this.name} Division first`);
    }
}

student.result();

////          class keyword can be used in javascript
////          this keyword is used to declare datamembers


class Vehicle {
    
    constructor(model, wheels) {
        this.model = model;
        this.wheels = wheels;
    }

    start() {
        console.log(this.model + " is starting")
    }
}

const car = new Vehicle("XUV",4);
const bike = new Vehicle("Ducati 600",2);

console.log(car);
car.start();
console.log(bike);
bike.start();