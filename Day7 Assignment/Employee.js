var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Department class
var Department = /** @class */ (function () {
    function Department() {
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.removeEmployee = function (id) {
        for (var i = 0; i < this.employees.length; i++) {
            if (this.employees[i].id === id) {
                this.employees.splice(i, 1);
                break;
            }
        }
    };
    Department.prototype.getTotalSalary = function () {
        var total = 0;
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var emp = _a[_i];
            total += emp.salary;
        }
        return total;
    };
    Department.prototype.listEmployees = function () {
        console.log(this.employees);
    };
    return Department;
}());
// GenericStorage class
var GenericStorage = /** @class */ (function () {
    function GenericStorage() {
        this.items = [];
    }
    GenericStorage.prototype.add = function (item) {
        this.items.push(item);
    };
    GenericStorage.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    GenericStorage.prototype.getAll = function () {
        return this.items;
    };
    return GenericStorage;
}());
// Utility function to update salary
function updateSalary(employee, newSalary) {
    return __assign(__assign({}, employee), { salary: newSalary });
}
// Example usage
var dept = new Department();
dept.addEmployee({ id: 1, name: "Yashvi", position: "Developer", salary: 50000 });
dept.addEmployee({ id: 2, name: "Bob", position: "Tester", salary: 40000 });
dept.removeEmployee(2);
console.log("Total Salary:", dept.getTotalSalary());
dept.listEmployees();
var storage = new GenericStorage();
storage.add({ id: 3, name: "Adina", position: "Manager", salary: 60000 });
console.log(storage.getAll());
var updatedEmployee = updateSalary({ id: 1, name: "Yashvi", position: "Developer", salary: 50000 }, 55000);
console.log(updatedEmployee);
