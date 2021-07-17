const generateHTML = (answers) =>
  `
# ${answers.projectTitle}

Link: ${answers.linkToProj}

## Description
${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${answers.installationInst}

## Usage
${answers.usageInst}

## Credits
${answers.ghUsername}- Github
${answers.email}- Email

## License
![License](https://img.shields.io/badge/license-${answers.license}-blue) 

## Features
${answers.features}

## How to Contribute
${answers.contributionInst}
See [Contributor Covenant](https://www.contributor-covenant.org/)

## Tests
${answers.testingInst}
Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the name of your Project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project(be as detailed as possible):",
    },
    {
      type: "input",
      name: "installationInst",
      message: "How would you Like your users to install this application?",
    },
    {
      type: "input",
      name: "usageInst",
      message: "What is the intended usage of this product?",
    },
    {
      type: "list",
      name: "license",
      message: "Licensing options",
      choices: ["MIT", "BSD3"],
    },
    {
      type: "input",
      name: "contributionInst",
      message:
        "How will any other developer make contributions?",
    },
    {
      type: "input",
      name: "testingInst",
      message: "How would you like the user to test functionality?(Be as detailed as possible)",
    },
    {
      type: "input",
      name: "ghUsername",
      message: "Github Username: ",
    },
    {
      type: "input",
      name: "email",
      message: "Email: ",
    },
    {
      type: "input",
      name: "linkToProj",
      message: "Project Link:",
    },
    {
      type: "input",
      name: "features",
      message: "features included: ",
    },
  ])
  .then((answers) => {
    console.log(answers);
    fs.writeFileSync("README.md", generateHTML(answers), (err) =>
      err
        ? console.log(`You done screwed it up!`)
        : console.log(`Hey, check out the big brain on Brad`)
    );
  });
