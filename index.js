const inquirer = require("inquirer");
const getShape = require("./lib/shape");
const createSvg = require("./lib/svgGenerator");

inquirer
.prompt([
  { 
    type: "input",
    name: "text",
    message: "Enter your 3 characters.",
    validate: (input) => {
        if(input.length <= 3) return true;
        return new Error("Please enter 3 or less characters");
    },
   },
    {
     type: "input",
     name: "textColor",
     message: "Please enter the color for text, (hex or keyword)",
    },
    {
     type: "list",
     name: "shape",
     message: "Please choose logo shape:",
     choices: ["Square","Triangle","Circle"],
    },
    {
       type: "input",
       name: "color",
       message: "Please enter the color for shape, (hex or keyword)", 
    },
    ])
    .then((answers) => {
        createSvg(getShape(answers));
    })