const { Console } = require('console')
const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const { listenerCount } = require('process')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

var employeeArray = []
var cardArray = []

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the Manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the Manager's ID number?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the Manager's email address?"
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the Manager's office number?"
        },
    ]).then((userInput) => {
        const manager = new Manager(userInput.managerName, userInput.managerId, userInput.managerEmail, userInput.managerOfficeNumber)
        employeeArray.push(manager)

        directory()
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the Engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the Engineer's ID number?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the Engineer's email address?"
        },
        {
            type: 'input',
            name: 'engineerGit',
            message: "What is the Engineer's gitHub username?"
        },
    ]).then((userInput) => {
        const engineer = new Engineer(userInput.engineerName, userInput.engineerId, userInput.engineerEmail, userInput.engineerGit)
        employeeArray.push(engineer)

        directory()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the Intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the Intern's ID number?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the Intern's email address?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the Intern's school?"
        },
    ]).then((userInput) => {
        const intern = new Intern(userInput.internName, userInput.internId, userInput.internEmail, userInput.internSchool)
        employeeArray.push(intern)

        directory()
    })
}

function buildHtml() {
    // console.log(employeeArray[0])

    for(let i = 0; i<employeeArray.length; i++){
        var builtCards = `<div class="card column p-3">
        <div class="bg-warning rounded p-3 h4 d-flex justify-content-center">
            ${employeeArray[i].getRole()}
        </div>
        <div class="rounded p-3 h4 border">
            ${employeeArray[i].name}
        </div>
        <div class="rounded p-3 h4 border">
            ID: ${employeeArray[i].id}
        </div>
        <div class="rounded p-3 h4 border">
            Email: <a href='mailto: ${employeeArray[i].email}'>${employeeArray[i].email}</a>
        </div>
        <div class="rounded p-3 h4 border">
            ${employeeArray[i].officeNumber || employeeArray[i].school || `<a href='https://github.com/${employeeArray[i].git}/'>${employeeArray[i].git}</a>`}
        </div>
        </div>`

        cardArray.push(builtCards)
    }

    cards = cardArray.join(' ')

    var htmlTemplate = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>HTML 5 Boilerplate</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <style>
                .card {
                    width: 380px;
                    height: auto;
                    margin: 25px;
                }
            </style>
        </head>
      <body>
        <header id="header" class="text-center h1 p-5 bg-success text-white">${employeeArray[0].name}'s Team</header>
        <div id="container" class="container">
            <div class="row d-flex justify-content-center" id="card">               
                ${cards} 
            </div>
        </div>
      </body>
    </html>`

    fs.writeFile(
        `${employeeArray[0].name}'s_Team.html`,
        htmlTemplate,
        function (err) {
            if (err) throw err;
            console.log('File is created successfully.')
        }
    )
}

function directory() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeChoice',
            message: "Add a team member?",
            choices: ['Engineer', 'Intern', 'Done adding']
        }
    ]).then((userInput) => {
        switch (userInput.employeeChoice) {
            case 'Engineer':
                addEngineer()
                break
            case 'Intern':
                addIntern()
                break
            default:
                buildHtml()

        }
    })
}

addManager()