// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer.createPromptModule([
  {
    type: 'input',
    message: '',
    name: 'Table Of Contents',
  },
  {
    type: 'input',
    message: '',
    name: 'Description',
  },
  {
    type: 'input',
    message: '',
    name: 'Installation',
  },
  {
    type: 'input',
    message: '',
    name: 'Usage',
  },
  {
    type: 'checkbox',
    message: '',
    name: 'License',
    choices: [],
  },
  {
    type: 'input',
    message: '',
    name: 'Contributing',
  },
  {
    type: 'input',
    message: '',
    name: 'Tests',
  },
  {
    type: 'input',
    message: '',
    name: 'Questions',
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// todo THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// todo THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// todo THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// todo THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// todo THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// todo THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// todo THEN I am taken to the corresponding section of the README
