const Employee = require(`../lib/employee`);

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email)
    this.office = office;
    this.title = `Manager`;
  }
  getOffice() {
    return this.office;
  }
}

module.exports = Manager;