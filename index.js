const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const bsd = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: 'What is the title of your project?',
        },
        {
            type: "input",
            name: "description",
            message: 'Provide description of your project.',
        },
        {
            type: "input",
            name: "installation",
            message: 'What users need to install in order for the application to work?',
        },
        {
            type: "input",
            name: "usage",
            message: 'How to use the application?',
        },
        {
            type: "input",
            name: "test",
            message: 'How do you test the application',
        },
        {
            type: "list",
            name: "license",
            message: 'What type of license does the application require?',
            choices: [
                "Apache",
                "MIT",
                "BSD 3-Clause",
            ]
        },
        {
            type: "input",
            name: "contribute",
            message: 'Who contribute to this project?',
        },
        {
            type: "input",
            name: "username",
            message: 'What is your GitHub user name?',
        },
        {
            type: "input",
            name: "email",
            message: 'What is your email address?',
        },

    ])
    .then((data) => {
        const filename = "README.md";

        if (data.license === "Apache") {
            data.license = apache;
        } else if (data.license === "MIT") {
            data.license = mit;
        } else if (data.license === "bsd") {
            data.license = bsd;
        } else {
            data.license = "No License!"
        }

        fs.writeFile(filename, generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('README file has been generated!')
        );
    });