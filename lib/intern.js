const Employee = require(`../lib/employee`);

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;
    this.title = `Intern`;
  }
}

module.exports = Intern;