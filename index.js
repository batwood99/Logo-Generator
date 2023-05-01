const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const shapes = require('./lib/shapes');

const generateCircle = shapes.generateCircle;
const generateTriangle = shapes.generateTriangle;
const generateSquare = shapes.generateSquare;

// Prompt the user for input
inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: function (value) {
      if (value.length > 3) {
        return 'Please enter up to three characters';
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hex value):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape for the logo:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hex value):'
  }
])
.then(function(answers) {
    // Generate the SVG string based on user input
    let svg;
    switch (answers.shape) {
      case 'circle':
        svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">${generateCircle(answers.shapeColor, 100)}`;
        break;
      case 'triangle':
        svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">${generateTriangle(answers.shapeColor, 200)}`;
        break;
      case 'square':
        svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">${generateSquare(answers.shapeColor, 200)}`;
        break;
    }
    svg += `<text x="50%" y="50%" fill="${answers.textColor}" text-anchor="middle" font-size="48">${answers.text}</text></svg>`;

    // Write the SVG string to a file
    const writeFile = util.promisify(fs.writeFile);
    writeFile('logo.svg', svg)
      .then(function() {
        console.log('Generated logo.svg')
      })
      .catch(function(err) {
        console.error(err)
      });
  })
  .catch(function(err) {
    console.error(err);
  });
