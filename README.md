# Logo-Generator
Logo Generator is a command line tool that generates an SVG file for a custom logo based on user input. The user is prompted for text, text color, shape, and shape color. The generated logo will be saved as an SVG file named logo.svg.

## Installation
To use Logo Generator, you must have Node.js installed on your computer. You can download Node.js from the official website.

Once Node.js is installed, clone this repository and navigate to the project directory in your terminal. Then, run the following command to install the dependencies:

npm install

## Usage
To use Logo Generator, navigate to the project directory in your terminal and run the following command:

npm start

You will be prompted for the following:

Text: Enter up to three characters for the logo.
Text color: Enter the text color (keyword or hex value).
Shape: Select a shape for the logo from the options circle, triangle, and square.
Shape color: Enter the shape color (keyword or hex value).
After entering all of the prompts, an SVG file named logo.svg will be generated in the project directory, and the output text "Generated logo.svg" will be printed in the command line.

To view the generated logo, open the logo.svg file in a web browser. The image will be 300x200 pixels and will match the criteria you entered.

## Testing
To run the tests for the shapes module, run the following command:

npm test

This will run the test suite using Jest.

## License
Logo Generator is released under the MIT License.