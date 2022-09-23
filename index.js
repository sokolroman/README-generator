
// TODO: Include packages needed for this application
const generateMarkdown = require("./genMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
const { title } = require("process");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your project's title...",
    name: "title",
    default: title,
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter a title into the prompt";
      }
    },
  },
  {
    type: "input",
    message: "Enter installation details...",
    name: "installation",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter installation details into the prompt";
      }
    },
  },
  {
    type: "input",
    message: "Include operational instructions...",
    name: "instructions",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter operational instructions to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter a description for your project...",
    name: "description",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter a description into the prompt";
      }
    },
  },
  {
    type: "input",
    message: "Enter your applications functionality...",
    name: "usage",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter application functionality into the prompt";
      }
    },
  },
  {
    type: "list",
    message: "Please enter the application licence (you may choose none)...",
    choices: [ "Mozilla", "MIT", "ISC", "Apache",  "None"],
    name: "license",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter a license into the prompt";
      }
    },
  },
  {
    type: "input",
    message: "List contributors, Ex. @sokolroman...",
    name: "credit",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter contributors into the prompt";
      }
    },
  },
  {
    type: "input",
    message: "Add contact info...",
    name: "contact",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "enter contact info into the prompt";
      }
    },
  },
];

// TODO: Create a function to write README file
writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFileSync("README.md", generateMarkdown(data));
  });
}

init();
