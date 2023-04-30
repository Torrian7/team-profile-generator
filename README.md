# team-profile-generator
 - [Tests](#tests)# Team_profile_generator

  [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)

## Description
This project required building a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Tests were written for each part of the code using Jest to ensure that it passes all of them.

When prompted for team members and their information, then an HTML is generated that displays a nicely formatted team roster based on user input.

## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Technology Used](#technology-used)
- [Questions](#questions)

## Installation

To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command ```npm init```  into the terminal. Inquirer must then be installed by entering ```npm install inquirer```. Finally, the program can then be run by entering ```node develop/index.js``` into the command line, and answering each question appropriately.

```JavaScript
npm install inquirer

var inquirer = require('inquirer');
  inquirer
    .prompt([
      /* Pass your questions in here */
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
```
 
## Usage
Inquirer is easiest to use when installed with npm:  ``` npm install inquirer ```. Then you can load the module into your code with a require call: ``` const inquirer = require(‘inquirer’); ```
1. Enter management information
2. You will be redirected to a menu, where you can choose to add an engineer, add an intern, or end the application
3. If you choose to add an engineer or an intern, you will be reprompted to the menu until you choose to end the application
4. Once you end the application, your software team will be generated in an HTML file

## License
This application is rendered under MIT

## Contributors
To contribute to Team_profile_generator, clone this repo locally and commit your code on a separate branch.
  
Contributors:

<a href="https://github.com/torrian7/teamprofilegenerator/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=torrian7/teamprofilegenerator" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Tests
![GitHub license](https://img.shields.io/badge/test-100%25-success)

## Technology Used
- HTML
- CSS
- JavaScript
- Node.js
- Inquirer
- Path
- Jest

## Questions
My Github username is torrian7, which can be accessed here https://github.com/torrian7/teamprofilegenrator.

The Github page for this project can be accessed using the following link: https://torrian7.github.io/teamprofilegenerator/.
