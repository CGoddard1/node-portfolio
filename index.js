// node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "authorName",
        message: "Please enter your first and last name.",
    },
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project",
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "Please enter contribution guidelines for your project.",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log("hello");