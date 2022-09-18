//* Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license == 'Boost') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  }
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license == 'None') {
    return '';
  }
}
// ?this function is not being used
//  Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
// ?this function is not being used
// Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (
    ` 
   # ${data.title}
   # Table of Contents
   1. [Description](#description)
   2. [Installation](#installation)
   3. [Usage](#usage)
   4. [Contributors](#contributors)
   5. [Test Instructions](#testInstructions)
   6. [License](#license)
   7. [Questions](#questions)
   # Description
  ${data.description}
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Contributors
  ${data.contributors}
  # Test Instructions
  ${data.testInstructions}
  # License
  Your project is covered under license:\n
  ${data.license} 
  ${renderLicenseBadge(data.license)}\n
  # Questions
  If you have any additional questions about this project, email me at:
  ${data.email} \n
  Or check out my github!
 https://github.com/` +
    `${data.github}\n
`
  );
}

module.exports = generateMarkdown;
