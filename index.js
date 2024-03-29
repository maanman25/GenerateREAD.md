//Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Utils/generateMarkdown");

//This function defines the questions and initializes the application in the command line, creating a list of licenses for users and a section to display their contact information
function init() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the title of your application?",
      },
      {
        name: "description",
        type: "input",
        message: "Describe how your application is used and its purpose:",
      },
      {
        name: "installation",
        type: "input",
        message: "What is required to run your application locally?",
        default: "npm i"
      },
      {
        name: "usage",
        type: "input",
        message: "How will this application be used?",
      },
      {
        name: "license",
        type: "list",
        message: "Choose a License",
        choices: ["GPL v3", "ISC", "MIT", "MPL 2.0"],
      },
      {
        name: "contributors",
        type: "input",
        message: "Please enter any contributors to this application with username and name of the repository:",
      },
      {
        name: "tests",
        type: "input",
        message: "Please describe libraries used for testing software and supply commands:",
      },
      {
        name: "questions",
        type: "input",
        message: "Please enter your GitHub username and your email address with instructions:",
      },  
    ])

    // This function takes user responses and calls on the generateMarkdown.js to create new README in Output file
    .then((responses) => {
      const markdown = generateMarkdown(responses);

      fs.writeFile("./Output/README.md", markdown, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md")
      );
    });
}

init();
