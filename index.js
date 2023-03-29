// node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
// array of questions for inquierer
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
    },
    {
        type: "input",
        name: "testing",
        message: "Please enter test instructions for your project.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: ["MIT", "ISC", "Apache", "GPL", "BSD", "None"],
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username",
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Please enter your email address",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log("hello");