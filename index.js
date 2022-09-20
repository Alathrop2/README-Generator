//* Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
//* Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'titile',
  },
  {
    type: 'input',
    message: 'Give a description of your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'How can your project be installed?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What is this project used for?',
    name: 'usage',
  },
  {
    type: 'checkbox',
    message: 'What license did you use?',
    name: 'license',
    choices: ['Apache', 'Boost', 'MIT', 'None'],
  },
  {
    type: 'input',
    message: 'Who contributed to this project?',
    name: 'contributors',
  },
  {
    type: 'input',
    message: 'How can your project be tested?',
    name: 'testInstructions',
  },
  {
    type: 'input',
    message: 'What is your github username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

//* Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

//* Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile('./README.md', generateMarkdown(answers));
  });
}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
//? THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
//? THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//? THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
//? THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
//? THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
//? THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
//? THEN I am taken to the corresponding section of the README
