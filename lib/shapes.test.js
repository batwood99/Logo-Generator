const shapes = require('./shapes');

describe('generateCircle', () => {
  it('should return a valid SVG circle element', () => {
    const result = shapes.generateCircle('#FF0000', 50);
    expect(result).toEqual('<circle cx="50" cy="50" r="50" fill="#FF0000" />');
  });
});

describe('generateTriangle', () => {
  it('should return a valid SVG polygon element', () => {
    const result = shapes.generateTriangle('#00FF00', 100);
    expect(result).toEqual('<polygon points="0,100 100,100 50,0" fill="#00FF00" />');
  });
});

describe('generateSquare', () => {
  it('should return a valid SVG rect element', () => {
    const result = shapes.generateSquare('#0000FF', 75);
    expect(result).toEqual('<rect width="75" height="75" fill="#0000FF" />');
  });
});