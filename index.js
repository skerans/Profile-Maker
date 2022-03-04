const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const htmlPage = require(`./src/htmlPage`)
const { profile } = require('console');


const start = () => {

  inquirer.prompt([{
    type: `input`,
    name: `teamName`,
    message: `What is the name of your team?`
  }])
    .then((data) => {
      teamName = data.teamName;
      chooseManager();
    })

  function chooseManager() {
    inquirer.prompt([{
      type: `input`,
      name: `name`,
      message: `What is the name of the team/s manager?`
    },
    {
      type: `input`,
      name: `id`,
      message: `What is the manager/s ID?`
    },
    {
      type: `input`,
      name: `email`,
      message: `What is the manager/s email address?`
    },
    {
      type: `input`,
      name: `office`,
      message: `What is the manager/s office number?`
    },
    ])
      .then((data) => {
        let newManager;
        newManager = new Manager(data.name, data.id, data.email, data.office);

        chooseEmployee();
      })

  }

  function chooseEmployee() {
    inquirer.prompt([{
      type: `list`,
      name: `continue`,
      message: `Would you like to add a member to the team?`,
      choices: [
        `Engineer`,
        `Intern`,
        `No new team members`
      ]
    }])
      .then((data) => {
        switch (data.continue) {
          case `Engineer`:
            newEngineer();
            break;
          case `Intern`:
            newIntern();
            break;
          default:
            fs.writeFile(`./team-profile.html`, htmlPage)
            break;
        }
      })
  }



}



























async function prompt() {
  let responseDone = "";

  do {
    try {
      console.log("---------------------------------------------");
      let response = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the employee's name?: ",
          validate: function validateName(name) {
            return name !== '';
          }
        },
        {
          type: "input",
          name: "id",
          message: "Enter the employee's ID: ",
          validate: function validateName(name) {
            return name !== '';
          }
        },
        {
          type: "input",
          name: "email",
          message: "Enter the employee's email address: ",
          // Validate that it is an email using email-validator
          validate: function validateEmail(name) {
            return validator.validate(name);
          }
        },
        {
          type: "list",
          name: "role",
          message: "What what is the employee's role:",
          choices: [
            "Engineer",
            "Intern",
            "Manager"
          ]
        }
      ]);

      let response2 = ""

      if (response.role === "Engineer") {
        response2 = await inquirer.prompt([{
          type: "input",
          name: "x",
          message: "What is the employee's github username?:",
          validate: function validateName(name) {
            return name !== '';
          },
        },]);

        // Add to team Array
        const engineer = new Engineer(response.name, response.id, response.email, response2.x);
        teamArray.push(engineer);

      } else if (response.role === "Intern") {
        response2 = await inquirer.prompt([{
          type: "input",
          name: "x",
          message: "What school is the employee attending?:",
          validate: function validateName(name) {
            return name !== '';
          },
        },]);

        // Add to team Array
        const intern = new Intern(response.name, response.id, response.email, response2.x);
        teamArray.push(intern);

      } else if (response.role === "Manager") {
        response2 = await inquirer.prompt([{
          type: "input",
          name: "x",
          message: "What is the employee's office number?:",
          validate: function validateName(name) {
            return name !== '';
          },
        },]);

        // Add to team Array
        const manager = new Manager(response.name, response.id, response.email, response2.x);
        teamArray.push(manager);
      }

    } catch (err) {
      return console.log(err);
    }

    responseDone = await inquirer.prompt([{
      type: "list",
      name: "finish",
      message: "Do you want to continue?: ",
      choices: [
        "Yes",
        "No"
      ]
    },]);

  } while (responseDone.finish === "Yes");
}