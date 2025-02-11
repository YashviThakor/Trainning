// Employee Management System in TypeScript
// Base Employee class with name, id, and salary properties
class Employee {
    name: string;
    id: number;
    salary: number;
    constructor(name: string, id: number, salary: number) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    calculateBonus(): number {
        return 0; 
        }
}
class Manager extends Employee {
    department: string;

    constructor(name: string, id: number, salary: number, department: string) {
        super(name, id, salary);
        this.department = department;
    }

    calculateBonus(): number {
        return this.salary * 0.20; 
    }
}
class Engineer extends Employee {
    specialization: string;

    constructor(name: string, id: number, salary: number, specialization: string) {
        super(name, id, salary);
        this.specialization = specialization;
    }

    calculateBonus(): number {
        return this.salary * 0.15; 
    }
}
class Intern extends Employee {
    timePeriod: string;

    constructor(name: string, id: number, salary: number, timePeriod: string) {
        super(name, id, salary);
        this.timePeriod = timePeriod;
    }

    calculateBonus(): number {
        return this.salary * 0.10; 
    }
}
const manager = new Manager("Yashvi Thakor", 101, 25000, "Finance");
const engineer = new Engineer("Vaishnavi Chaudhary", 102, 60000, "Software");
const intern = new Intern("Adina Jacob", 103, 20000, "6 months");
console.log(`${manager.name}'s bonus: ${manager.calculateBonus()}`);
console.log(`${engineer.name}'s bonus: ${engineer.calculateBonus()}`);
console.log(`${intern.name}'s bonus: ${intern.calculateBonus()}`);
