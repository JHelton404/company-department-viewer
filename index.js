const inquirer = require('inquirer')
const mysql = require('mysql2')
require('dotenv').config()
const consoleTable = require('console.table')

const connection = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
  }
)

const questions = {
    type: 'list',
    name: 'company',
    message: 'Choose a Parameter',
    choices: ['View Departments',
    'View Roles', 
    'View Employees',
    'Add a Department',
    'Add Roles',
    'Add Employees',
    'Assign Employee Role'
    ]
  }

function init() {
  inquirer.prompt(questions).then(data => {
    switch (data.company) {
      case "View Departments":
        Departments();
        break;
      case "View Roles":
        Roles();
        break;
      case "View Employees":
        Employees();
        break;
      case "Add a Department":
        newDepartment();
        break;
      case "Add Roles":
        newRoles();
        break;
      case "Add Employees":
        newEmployees();
        break;
      case "Assign Employee Role":
        assignRole();
        break;
    }
  })
}

init();

function Departments() {
  const query = 'SELECT * FROM department';
  connection.query(query, (err, results) => {
    if (err) {
      console.log(err);
      return
    }
    console.table(results);
    init();
  })
}

function Roles() {
  const query = 'SELECT * FROM role';
  connection.query(query, (err, results) => {
    if (err) {
      console.log(err);
      return
    }
    console.table(results);
    init();
  })
}

function Employees() {
  const query = 'SELECT * FROM employee';
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.table(results);
    init();
  })
}

function newDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the new departments name?',
      name: 'newDepartment',
    }
  ])
  .then((data) => {
    connection.query(
      `INSERT INTO department (department_name) VALUES (?)`,
      [data.newDepartment],
      function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
      }
    )
  })
}

function newRoles() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What will the new role be called?',
      name: 'newRoleTitle'
    },
    {
      type: 'input',
      message: 'What will the new roles salary be?',
      name: 'newRoleSalary'
    },
    {
      type: 'input',
      message: 'What department will this new role be a part of?',
      name: 'newRoleDepartment'
    }
  ])
  .then((data) => {
    connection.query(
      `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
      [data.newRoleTitle, data.newRoleSalary, data.newRoleDepartment],
      function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
      }
    )
  })
}

function newEmployees() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the new employees first name?',
      name: 'newEFirstName'
    },
    {
      type: 'input',
      message: 'What is the new employees last name?',
      name: 'newELastName'
    },
    {
      type: 'input',
      message: 'What is the new employees role id?',
      name: 'newERoleId'
    },
    {
      type: 'input',
      message: 'What is the role id of their manager?',
      name: 'newEManagerId'
    }
  ])
  .then((data) => {
    connection.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
      [data.newEFirstName, data.newELastName, data.newERoleId, data.newEManagerId],
      function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
      }
    )
  })
}

function assignRole() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the employees id number?',
      name: 'employeeId'
    },
    {
      type: 'input',
      message: 'What is the employees new role id?',
      name: 'employeeNewRole'
    }
  ])
  .then((data) => {
    connection.query(
      `UPDATE employee SET role_id = ? WHERE id = ?`,
      [data.employeeNewRole, data.employeeId],
      function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
      }
    )
  })
}