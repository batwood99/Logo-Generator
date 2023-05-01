function generateCircle(color, radius) {
  return `<circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" />`;
}

function generateTriangle(color, size) {
  const halfSize = size / 2;
  const points = `0,${size} ${size},${size} ${halfSize},0`;
  return `<polygon points="${points}" fill="${color}" />`;
}

function generateSquare(color, size) {
  return `<rect width="${size}" height="${size}" fill="${color}" />`;
}

module.exports = {
  generateCircle: generateCircle,
  generateTriangle: generateTriangle,
  generateSquare: generateSquare
};
