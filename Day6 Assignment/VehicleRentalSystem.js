var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, rentPricePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }
    Vehicle.prototype.calculateRentalCost = function (days) {
        return this.rentPricePerDay * days;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, rentPricePerDay, colour) {
        var _this = _super.call(this, brand, model, rentPricePerDay) || this;
        _this.colour = colour;
        return _this;
    }
    Car.prototype.calculateRentalCost = function (days) {
        return _super.prototype.calculateRentalCost.call(this, days);
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand, model, rentPricePerDay, colour) {
        var _this = _super.call(this, brand, model, rentPricePerDay) || this;
        _this.colour = colour;
        return _this;
    }
    Bike.prototype.calculateRentalCost = function (days) {
        var cost = _super.prototype.calculateRentalCost.call(this, days);
        if (days > 3) {
            cost *= 0.9;
        }
        return cost;
    };
    return Bike;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, model, rentPricePerDay) {
        return _super.call(this, brand, model, rentPricePerDay) || this;
    }
    Truck.prototype.calculateRentalCost = function (days) {
        var cost = _super.prototype.calculateRentalCost.call(this, days);
        if (days > 5) {
            cost += 50;
        }
        return cost;
    };
    return Truck;
}(Vehicle));
var car = new Car("Mahindra", "Thar", 1000, "Black");
var bike = new Bike("Eicher", "Royal Enfield", 500, "Black");
var truck = new Truck("Ford", "F-150", 1500);
console.log("".concat(car.model, " rental for 5 days: ").concat(car.calculateRentalCost(5), " of colour ").concat(car.colour));
console.log("".concat(bike.model, " rental for 3 days: ").concat(bike.calculateRentalCost(3), " of colour ").concat(bike.colour));
console.log("".concat(bike.model, " rental for 5 days: ").concat(bike.calculateRentalCost(5), " of colour ").concat(bike.colour));
console.log("".concat(truck.model, " rental for 7 days: ").concat(truck.calculateRentalCost(7)));
