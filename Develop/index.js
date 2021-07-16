const generateHTML = (answers) =>
  `
# ${answers.projectTitle}
## Description
${answers.description}
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?
## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${answers.installationInst}
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
## Usage
${answers.usageInst}
Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    md
    ![alt text](assets/images/screenshot.png)
  
## Credits
${answers.ghUsername}- Github

List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
## License
![License](https://img.shields.io/badge/license-${answers.license}-blue) //
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
## Features
If your project has a lot of features, list them here.
## How to Contribute
${answers.contributionInst}
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
## Tests
${answers.testingInst}
Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;
// </li>
// </ul>
// </div>
// </div>
// </body>
// </html>
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.projectTitle}</h1>
//     <p class="lead">I got squeezed out in ${answers.description}.</p>
//     <p class="lead">I get giggles from${answers.installationInst}.</p>
//     <p class="lead">I enjoy putting inside me, ${answers.usageInst}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">You can find my half done projects on GitHub with my username, which is ${answers.ghUsername}</li>
//       <li class="list-group-item">Me don have a job, here's a link to why:

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
      message: "What you like to put in you?",
      choices: [
        "children's soul",
        "children's tears",
        "Jack's quiche",
        "after-dinner mints",
      ],
    },
    {
      type: "input",
      name: "contributionInst",
      message:
        "Whats your github user name, I want to see a bunch of half done projects",
    },
    {
      type: "input",
      name: "testingInst",
      message: "show me where I can see why you don't have a job",
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
      type: "list",
      name: "license",
      message: "show me where I can see why you don't have a job",
      choices: ["MIT", "BSD3"],
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
