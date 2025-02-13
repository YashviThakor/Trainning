// Employee interface
interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
  }
  
  // Manager interface
  interface Manager extends Employee {
    teamSize: number;
  }
  
  // Department class
  class Department {
    private employees: Employee[] = [];
  
    addEmployee(employee: Employee): void {
      this.employees.push(employee);
    }
  
    removeEmployee(id: number): void {
      for (let i = 0; i < this.employees.length; i++) {
        if (this.employees[i].id === id) {
          this.employees.splice(i, 1);
          break;
        }
      }
    }
  
    getTotalSalary(): number {
      let total = 0;
      for (let emp of this.employees) {
        total += emp.salary;
      }
      return total;
    }
  
    listEmployees(): void {
      console.log(this.employees);
    }
  }
  
  // GenericStorage class
  class GenericStorage<T> {
    private items: T[] = [];
  
    add(item: T): void {
      this.items.push(item);
    }
  
    remove(item: T): void {
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  
    getAll(): T[] {
      return this.items;
    }
  }
  
  // Utility function to update salary
  function updateSalary<T extends Employee>(employee: T, newSalary: number): T {
    return {
      ...employee,
      salary: newSalary,
    };
  }
  
  // Example usage
  const dept = new Department();
  dept.addEmployee({ id: 1, name: "Yashvi", position: "Developer", salary: 50000 });
  dept.addEmployee({ id: 2, name: "Bob", position: "Tester", salary: 40000 });
  
  dept.removeEmployee(2);
  console.log("Total Salary:", dept.getTotalSalary());
  dept.listEmployees();
  
  const storage = new GenericStorage<Employee>();
  storage.add({ id: 3, name: "Adina", position: "Manager", salary: 60000 });
  console.log(storage.getAll());
  
  const updatedEmployee = updateSalary({ id: 1, name: "Yashvi", position: "Developer", salary: 50000 }, 55000);
  console.log(updatedEmployee);
  