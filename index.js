/**
 * A simple test SDK for GitHub Packages
 */

/**
 * Greets a user with a personalized message
 * @param {string} name - The name of the person to greet
 * @returns {string} A greeting message
 */
function greet(name = 'World') {
  return `Hello, ${name}! This is a test package from GitHub Packages.`;
}

/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Gets the current package version
 * @returns {string} The package version
 */
function getVersion() {
  return '1.0.0';
}

/**
 * Generates a random UUID (simple version for testing)
 * @returns {string} A simple UUID
 */
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = {
  greet,
  add,
  getVersion,
  generateId
};
