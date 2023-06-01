class Vehicle {
  // constructor() {
  //   this.model = "SUZUKI";
  //   this.Wheels = 4;
  // }

  constructor(model, wheels) {
    this.model = model;
    this.wheels = wheels;
  }

  start() {
    console.log(`vehicle starting ${this.model} of ${this.wheels} wheels`);
  }
}

class Scooter extends Vehicle {

}

const obj1 = new Vehicle("suzuki", 4);
const obj2 = new Vehicle("Rolls Royce", 4);

console.log(obj1);
console.log(obj2);

obj1.start();

/*
const student = {
  name: "Shivam",
  marks: 56,
  talk: function () {
    console.log(`My name is ${this.name} and marks are ${this.marks}`);
  }
};

student.talk();
*/
