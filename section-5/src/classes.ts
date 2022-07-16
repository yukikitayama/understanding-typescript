abstract class Department {
  static fiscalYear = 2020;

  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  // Shorthand initialization
  // Not only receive thes arguments, but also create those properties initialized in this class
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  //  {
  //   // console.log(`Department (${this.id}): ${this.name}`);
  // }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // Call the constructor of the base class Department
    // Use "this" after calling super
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

// const staticTest = new Department('d3', 'Test');
// console.log(staticTest);

// This doesn't work
// console.log(staticTest.fiscalYear);

// const accounting = new Department('d1', 'Accounting');
const accounting = new ITDepartment("d1", ["Max", "Yuki"]);

accounting.addEmployee("Max");
accounting.addEmployee("Yuki");

// Private keyword doesn't allow
// accounting.employees[2] = 'Anna';

// console.log(accounting);
console.log('here');
accounting.describe();
// accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();

console.log(accounting);

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting2 = new AccountingDepartment("d2", []);
const accounting2 = AccountingDepartment.getInstance();
const accounting3 = AccountingDepartment.getInstance();

console.log(accounting2, accounting3);

accounting2.mostRecentReport = "Year End Report";
// console.log(accounting2.mostRecentReport);

accounting2.addReport("Something went wrong...");
console.log(accounting2.mostRecentReport);
accounting2.addEmployee("Max");
accounting2.addEmployee("Manu");
// accounting2.printReports();
// accounting2.printEmployeeInformation();
accounting2.describe();
