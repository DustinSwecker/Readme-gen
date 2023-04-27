const apache = 'Apache License 2.0';
const boostSoftware = 'Boost Software License 1.0';
const BSD3 = 'BSD 3-Clause "New" or "Revised" License';
const BSD2 = 'BSD 2-Clause "Simplified" License';
const CC0 = 'Creative Commons Zero v1.0 Universal';
const eclipsePL = 'Eclipse Public License 2.0';
const GNUAfferoGPL = 'GNU Affero General Public License v3.0';
const GNUGPL2 = 'GNU General Public License v2.0';
const GNULGPL3 = 'GNU Lesser General Public License v3.0';
const mozillaPL = 'Mozilla Public License 2.0';
const unLicense = 'The Unlicense'


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case apache: 
      return('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]');
      
    case boostSoftware:
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
      
    case BSD3:
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
      
      case BSD2:
        return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]';
      
      case CC0:
        return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
      
      case eclipsePL:
        return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';

      case GNUAfferoGPL:
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
      
      case GNUGPL2:
        return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]';

      case GNULGPL3:
        return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]'

      case mozillaPL:
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
      
      case unLicense:
        return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
  }

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case apache: 
      return('https://opensource.org/licenses/Apache-2.0');
      
    case boostSoftware:
      return 'https://www.boost.org/LICENSE_1_0.txt';
      
    case BSD3:
      return 'https://opensource.org/licenses/BSD-3-Clause';
      
      case BSD2:
        return 'https://opensource.org/licenses/BSD-2-Clause';
      
      case CC0:
        return 'http://creativecommons.org/publicdomain/zero/1.0/';
      
      case eclipsePL:
        return 'https://opensource.org/licenses/EPL-1.0';

      case GNUAfferoGPL:
        return 'https://www.gnu.org/licenses/gpl-3.0'
      
      case GNUGPL2:
        return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';

      case GNULGPL3:
        return 'https://www.gnu.org/licenses/lgpl-3.0'

      case mozillaPL:
        return 'https://opensource.org/licenses/MPL-2.0';
      
      case unLicense:
        return 'http://unlicense.org/'
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case apache: 
      return `This project uses an ${apache} license`;
      
    case boostSoftware:
      return `This project uses an ${boostSoftware} license`;
      
    case BSD3:
      return `This project uses an ${BSD3} license`;
      
      case BSD2:
        return `This project uses an ${BSD2} license`;
      
      case CC0:
        return `This project uses an ${CC0} license`;
      
      case eclipsePL:
        return `This project uses an ${eclipsePL} license`;

      case GNUAfferoGPL:
        return `This project uses an ${GNUAfferoGPL} license`;
      
      case GNUGPL2:
        return `This project uses an ${GNUGPL2} license`;

      case GNULGPL3:
        return `This project uses an ${GNULGPL3} license`;

      case mozillaPL:
        return `This project uses an ${mozillaPL} license`;
      
      case unLicense:
        return `This project uses an ${unLicense} license`;
  }
}

function generateTOC(data) {
  const tableOfContentsArray = [];
  if (data.installation !== "") {
    tableOfContentsArray.push('[Installation](#installation)<br>');
  }
  if(data.usage !== "") {
    tableOfContentsArray.push('[Usage](#usage)<br>');
  }
  if(data.credits !== "") {
    tableOfContentsArray.push('[Contributors](#Contributors)<br>');
  }
  if(data.contributions !== "") {
    tableOfContentsArray.push('[How to Contribute](#howtocontribute)<br>');
  }
  if(data.test !== "") {
    tableOfContentsArray.push('[Testing](#testing)<br>');
  }
  if(data.license !== "") {
    tableOfContentsArray.push('[License](#license)<br>');
  }
  if(data.githubusername !== "" || data.email != "") {
    tableOfContentsArray.push('[Questions](#questions)');
  }
  if (data.toc) {
    tocContents=JSON.stringify(tableOfContentsArray);
    var stringToUse = tocContents.split(',');
  } return stringToUse;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.description !== "") {
    var dataDescription = '##Description:';
  } else dataDescription = '';

  if (data.installation !== "") {
    var dataInstallation = '##Installation:';
  } else dataInstallation = '';

  if(data.usage !== "") {
    var dataUsage = '##Usage:';
  } else dataUsage = '';

  if(data.credits !== "") {
    var dataCredits = '##Credits:';;
  }else dataCredits = '';

  if(data.contributions !== "") {
    var dataContributions = '##How to Contribute:';
  }else dataContributions = '';

  if(data.test !== "") {
    var dataTest = '##Testing:';
  }else dataTest = '';

  if(data.license !== "") {
    var dataLicense = '##License:';
  } else dataLicense = '';

  if(data.githubusername !== "" || data.email != "") {
    var questions = '##Questions? Reach out at:';
  } else questions = '';

  if(data.toc !== false) {
    var toContents = '##Table of Contents';
  } else toContents = '';

  return `# ${data.title} <br>  
    
${dataDescription}<br>
${data.description}<br>
  
${toContents} <br>
${generateTOC(data)}<br>

${dataInstallation}<br>
${data.installation}<br>

${dataUsage} <br>
${data.usage}<br>

${dataCredits} <br>
${data.credits}<br>

${dataContributions} <br>
${data.contributions}<br>

${dataTest} <br>
${data.test}<br>

${questions} <br>
Github: ${data.githubusername}<br>
Email: ${data.email}<br>
  
${dataLicense}<br>
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
