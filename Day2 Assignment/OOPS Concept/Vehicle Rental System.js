/* Vehicle Rental System
Create Vehicle class with brand, model, rentPricePerDay.
Subclasses: Car, Bike, Truck.
Polymorphism: Implement calculateRentalCost(days).
*/

class Vehicle {
    constructor(brand, model, rentPricePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
    calculateRentalCost(days) {
        return this.rentPricePerDay * days;
    }
}
class Car extends Vehicle {
    constructor(brand, model, rentPricePerDay, colour) {
        super(brand, model, rentPricePerDay)
        this.colour = colour
    }
    calculateRentalCost(days) {
        return super.calculateRentalCost(days);
    }
}
class Bike extends Vehicle {
    constructor(brand, model, rentPricePerDay, colour) {
        super(brand, model, rentPricePerDay);
        this.colour = colour;
    }
    calculateRentalCost(days) {
        let cost = super.calculateRentalCost(days);
        if (days > 3) {
            cost *= 0.9;
        }
        return cost;
    }
}
class Truck extends Vehicle {
    constructor(brand, model, rentPricePerDay) {
        super(brand, model, rentPricePerDay);
    }
    calculateRentalCost(days) {
        let cost = super.calculateRentalCost(days);
        if (days > 5) {
            cost += 50;
        }
        return cost;
    }
}
const car = new Car("Mahindra", "Thar", 1000, "Black");
const bike = new Bike("Eicher", "Royal Enfield", 500, "Black");
const truck = new Truck("Ford", "F-150", 1500);

console.log(`${car.model} rental for 5 days: ${car.calculateRentalCost(5)} of colour ${car.colour}`);
console.log(`${bike.model} rental for 3 days: ${bike.calculateRentalCost(3)} of colour ${bike.colour}`);
console.log(`${bike.model} rental for 5 days: ${bike.calculateRentalCost(5)} of colour ${bike.colour}`);
console.log(`${truck.model} rental for 7 days: ${truck.calculateRentalCost(7)}`);