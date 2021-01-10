// function to generate markdown for README
function generateMarkdown(data) {
  return `


# ${data.license}

# ${data.title}

# Description

${data.description}

# Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contribute)
* [Test](#test)
* [Questions](#questions)

# Installation

Install the following dependencies:


${data.installation}


# Usage

${data.usage}

# License

This application is licensed under the ${data.license}.

# Contributing

${data.contribute}

# Test

${data.test}


# Questions

Github Profile: [https://github.com/${data.username}]. Email: [${data.email}]
`;
}

module.exports = generateMarkdown;
