/*
    Classes
*/

// Parent class (or superclass)
class Vehicle {
    // Constructor
    constructor(year) {
        this._year = year;
    }

    // Getter
    get year() {
        return this._year;
    }
}

// Child class (or subclass)
class Car extends Vehicle {
    constructor(year, plate) {
        super(year);        // Calls constructor of the parent class
        this._plate = plate;
    }

    get plate() {
        return this._plate;
    }
}

my_vehicle = new Vehicle(2025);
console.log(my_vehicle.year);       // Output: 2025

my_car = new Car(2026, "LIBERTY");
console.log(my_car.year);           // Output: 2026
console.log(my_car.plate);          // Output: LIBERTY