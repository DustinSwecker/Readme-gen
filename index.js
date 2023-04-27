// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, generateMarkdown(data), (err)=> {
        err ? console.log(err) : console.log('File successfully generated');
    })
    ;

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: "How would you describe your project? Why did you build it? What problem does it solve? What did you learn?",
        name: 'description'
    },

    {
        type: 'input',
        message: 'Are there any installation instructions for your project? Please provide step-by-step instructions to get the project running.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How is the site used? Please provide examples for use and screenshots if possible. To add a screenshot, include the following format: ![alt text](file/path/foryourscreenshot.png)',
        name: 'usage'
    },
    {
        type: 'input',
        message: "Who aided and abetted this process? Include ALL collaborators!",
        name: "credits"
    },
    {
        type: 'input',
        message: 'How does one contribute to the project? https://www.contributor-covenant.org/ is an industry standard choice.',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'How do you test your project? Please include examples.',
        name: 'test'
    },

    {
        type: 'list',
        message: 'With which license would you like the project to be covered?',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubusername'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'confirm',
        message: 'Would you like to include a table of contents? Long READMEs are more easily navigated when a table of contents is included.',
        name: 'toc'
    },
    {
        type: 'input',
        message: 'What do you want to name your READme?',
        default: 'README.md',
        name: 'readmename'
    }])
    .then((answers)=> {
        console.log(answers);

        writeToFile(answers.readmename, generateMarkdown(answers));
        
        });
    }

// Function call to initialize app
init();
