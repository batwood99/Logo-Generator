const inquirer = require('inquirer');
const fs = require('fs');
const { generateCircle, generateTriangle, generateSquare } = require('./shapes');

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
.then((answers) => {
  // Generate the SVG string based on user input
  let svg;
  switch (answers.shape) {
    case 'circle':
      svg = generateCircle(answers.shapeColor, 100);
      break;
    case 'triangle':
      svg = generateTriangle(answers.shapeColor, 200);
      break;
    case 'square':
      svg = generateSquare(answers.shapeColor, 200);
      break;
  }
  svg += `<text x="50%" y="50%" fill="${answers.textColor}" text-anchor="middle" font-size="48">${answers.text}</text>`;
  
  // Write the SVG string to a file
  fs.writeFile('logo.svg', svg, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
})
.catch((err) => {
  console.error(err);
});
