# Readme Generator  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
    
## Description

In order to ease the process of creating a README file for projects, and bypass needing to consistently review different sites for best practices, a project was created that would incorporate those best practices. This accelerates the process of creating readme files so the developer can focus on more important tasks.
  
## Table of Contents 

■ [Usage](#usage) <br/> ■ [Credits](#credits) <br/> ■ [Testing](#testing) <br/> ■ [Questions](#questions) <br/> ■ [License](#license) <br/>


## Installation

In order to use this README generator, one would need to clone the repo onto their computer, navigate to the local /Readme-gen/ folder, open the terminal, and enter 'node index.js'.


## Usage 

There is no site, this is a node.js terminal driven project. Upon issuing the 'node index.js' command in the appropriate folder, the README generator prompts the user with a series of questions:

![Example of questions input](./Develop/images/example_of_prompts.png)

The user is able to choose the name of the file, can include their GitHub username, as well as their email to include in the Questions section.

Additionally, the user is prompted to select a license and is provided a list of 13 options to choose from:

![License options](./Develop/images/license_choices.png)

 When the answers are completed, an object is created from which a generator function generates the README file based on the user choices.

 ![Object created by questions](./Develop/images/object_created_for_generating_readme.png)

 The user is able to choose the name of the file, and can include their GitHub username, as well as their email to include in the Questions section.
 
 

## Credits 

Xandromus, aka, Xander Rapstine, and gachoi06, aka, Grace Choi

 

>

## Testing 

I tested this project by using console.log commands in the terminal and exhaustively checking 'node index.js' to check for flaws.

## Questions 

Direct questions to the following:

Github: https://github.com/DustinSwecker

Email: dustin.swecker@gmail.com
  
## License

https://opensource.org/licenses/MIT

This project uses an MIT License

