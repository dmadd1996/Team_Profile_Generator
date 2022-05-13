const fs = require ('fs')
const inquirer = require('inquirer')
const path = require('path')
const { listenerCount } = require('process')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

var employeeArray = []

function addManager(){
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

function addEngineer () {
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
        const engineer = new Engineer (userInput.engineerName, userInput.engineerId, userInput.engineerEmail, userInput.engineerGit)
        employeeArray.push(engineer)
        
        directory()
    })
}

function addIntern () {
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
        const intern = new Intern (userInput.internName, userInput.internId, userInput.internEmail, userInput.internSchool)
        employeeArray.push(intern)
        
        directory()
    })
}

function buildHtml(){
    console.log(employeeArray)
}

function directory(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeChoice',
            message: "Add a team member?",
            choices: ['Engineer', 'Intern', 'Done adding']
        }
    ]).then((userInput) => {
        switch(userInput.employeeChoice){
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