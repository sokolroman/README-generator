// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "Apache") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === "ISC") {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    } else if (license === "Mozilla") {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else license === " ";
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "Apache") {
      return `https://opensource.org/licenses/Apache-2.0`;
    } else if (license === "MIT") {
      return `https://opensource.org/licenses/MIT;`;
    } else if (license === "ISC") {
      return "https://opensource.org/licenses/ISC";
    } else if (license === "Mozilla") {
      return "https://opensource.org/licenses/MPL-2.0";
    } else license === " ";
  }
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  // function renderLicenseSection(license) {}
  
  // Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    ## Table of Contents
    1.[Installation](#installation)
  
    2.[Instructions](#instructions)
  
    3.[Description](#description)
  
    4.[Usage](#usage)
  
    5.[License](#license)
  
    5.[Credit](#credit)
    
    6.[Contact Info](#credit)
  
    ## Installation
    ${data.installation}
    ## Instructions
    ${data.instructions}
    ## Description
    ${data.description}
    ## Usage
    ${data.usage}
    ## License
    ${data.license}
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
    ## Credit
    ${data.credit}
    ## Contact Info
    ${data.contact}
    `
    
  }
  
  module.exports = generateMarkdown;
  