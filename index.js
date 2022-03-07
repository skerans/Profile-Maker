const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const makeHTML = require(`./src/htmlPage`);
const managercard = require(`./src/ManagerCard`);
const engineercard = require(`./src/EngineerCard`);
const interncard = require(`./src/InternCard`);
const { profile } = require('console');
let teamName = "";
const teamArr = [];

const start = () => {

  inquirer.prompt([{
    type: `input`,
    name: `teamName`,
    message: `What is the name of your team?`
  }])
    .then((data) => {
      // let teamName = "";
      teamName = data.teamName;
      chooseManager();
    })

  function chooseManager() {
    inquirer.prompt([{
      type: `input`,
      name: `name`,
      message: `What is the name of the team\'s manager?`
    },
    {
      type: `input`,
      name: `id`,
      message: `What is the manager\'s ID?`
    },
    {
      type: `input`,
      name: `email`,
      message: `What is the manager\'s email address?`
    },
    {
      type: `input`,
      name: `office`,
      message: `What is the manager\'s office number?`
    },
    ])
      .then((data) => {
        let newManager;
        newManager = new Manager(data.name, data.id, data.email, data.office);
        teamArr.push(newManager);
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
            chooseEngineer();
            break;
          case `Intern`:
            chooseIntern();
            break;
          default:
            writePage()
            // fs.writeFile(`./team-profile.html`, makeHTML(teamName, makeTeamCards()))
            break;
        }
      })
  }

  function chooseEngineer() {
    inquirer.prompt([{
      type: `input`,
      name: `name`,
      message: `What is the name of the engineer?`
    },
    {
      type: `input`,
      name: `id`,
      message: `What is the engineer\'s ID?`,
    },
    {
      type: `input`,
      name: `email`,
      message: `What is the engineer\'s email address?`,

    },
    {
      type: `input`,
      name: `github`,
      message: `What is the engineers\'s GitHub username?`,
    },
    ])
      .then((data) => {
        let newEngineer;
        newEngineer = new Engineer(data.name, data.id, data.email, data.github);
        teamArr.push(newEngineer);
        chooseEmployee();
      })
  }

  function chooseIntern() {
    inquirer.prompt([{
      type: `input`,
      name: `name`,
      message: `What is the name of the intern?`
    },
    {
      type: `input`,
      name: `id`,
      message: `What is the intern\'s ID?`,
    },
    {
      type: `input`,
      name: `email`,
      message: `What is the intern\'s email address?`,

    },
    {
      type: `input`,
      name: `school`,
      message: `What school does the intern attend?`,
    },
    ])
      .then((data) => {
        let newIntern;
        newIntern = new Intern(data.name, data.id, data.email, data.school);
        teamArr.push(newIntern);
        chooseEmployee();
      })
  }
}

function writePage() {
  fs.writeFile(`./team-profile.html`, makeHTML(teamName, makeTeamCards()), function (err) {console.log(err)})
}

const makeTeamCards = () => {

  let team = "";
  teamArr.forEach((member) => {
    switch (member.title) {
      case `Manager`:
        team += managercard(member);
        break;
      case `Engineer`:
        team += engineercard(member);
        break;
      case `Intern`:
        team += interncard(member);
        break;
      default:
        break;
    }
  });
  return team;
};

function init() {
  start();
};

init();