// Employee Management System 

/*  Create Employee class with name, id, #salary.
    Subclasses: Manager, Engineer, Intern.
    Polymorphism: Override calculateBonus() for each role. */

class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    calculateBonus() {
        return 0;
    }

}
class Manager extends Employee {
    constructor(name, id, salary, department) {
        super(name, id, salary);
        this.department = this.department;
    }
    calculateBonus() {
        return this.salary * 0.20;
    }
}
class Engineer extends Employee {
    constructor(name, id, salary, specialization) {
        super(name, id, salary);
        this.specialization = specialization;
    }
    calculateBonus() {
        return this.salary * 0.15;
    }
}
class Intern extends Employee {
    constructor(name, id, salary, timePeriod) {
        super(name, id, salary);
        this.timePeriod = timePeriod;
    }
    calculateBonus() {
        return this.salary * 0.10;
    }
}
const manager = new Manager("Yashvi Thakor", 101, 25000, "Finance");
const engineer = new Engineer("Vaishnavi Chaudhary", 102, 60000, "Software");
const intern = new Intern("Adina Jacob", 103, 20000, "6 months");

console.log(`${manager.name}'s bonus: ${manager.calculateBonus()}`);
console.log(`${engineer.name}'s bonus: ${engineer.calculateBonus()}`);
console.log(`${intern.name}'s bonus: ${intern.calculateBonus()}`);
