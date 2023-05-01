const inquirer = require('inquirer');
const svgCaptcha = require('svg-captcha');
const fs = require('fs');

inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo:'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for your logo:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):'
    }