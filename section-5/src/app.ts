class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  // Shorthand initialization
  // Not only receive thes arguments, but also create those properties initialized in this class
  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Yuki');

// Private keyword doesn't allow
// accounting.employees[2] = 'Anna';

// console.log(accounting);
accounting.describe();
// accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();


