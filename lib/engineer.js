const Employee = require(`../lib/employee`);

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
    this.title = `Engineer`;
  }
}

module.exports = Engineer;