// Employee Management System in TypeScript
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
// Base Employee class with name, id, and salary properties
var Employee = /** @class */ (function () {
    function Employee(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Employee.prototype.calculateBonus = function () {
        return 0; // Default implementation, can be overridden by subclasses
    };
    return Employee;
}());
// Manager subclass extending Employee
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, id, salary, department) {
        var _this = _super.call(this, name, id, salary) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.calculateBonus = function () {
        return this.salary * 0.20; // Managers get a 20% bonus
    };
    return Manager;
}(Employee));
// Engineer subclass extending Employee
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer(name, id, salary, specialization) {
        var _this = _super.call(this, name, id, salary) || this;
        _this.specialization = specialization;
        return _this;
    }
    Engineer.prototype.calculateBonus = function () {
        return this.salary * 0.15; // Engineers get a 15% bonus
    };
    return Engineer;
}(Employee));
// Intern subclass extending Employee
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern(name, id, salary, timePeriod) {
        var _this = _super.call(this, name, id, salary) || this;
        _this.timePeriod = timePeriod;
        return _this;
    }
    Intern.prototype.calculateBonus = function () {
        return this.salary * 0.10; // Interns get a 10% bonus
    };
    return Intern;
}(Employee));
// Create instances for each subclass
var manager = new Manager("Yashvi Thakor", 101, 25000, "Finance");
var engineer = new Engineer("Vaishnavi Chaudhary", 102, 60000, "Software");
var intern = new Intern("Adina Jacob", 103, 20000, "6 months");
// Print out the bonus for each employee
console.log("".concat(manager.name, "'s bonus: ").concat(manager.calculateBonus()));
console.log("".concat(engineer.name, "'s bonus: ").concat(engineer.calculateBonus()));
console.log("".concat(intern.name, "'s bonus: ").concat(intern.calculateBonus()));
