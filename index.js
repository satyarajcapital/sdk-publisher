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
  return '1.2.0';
}

/**
 * Generates a random UUID (simple version for testing)
 * @returns {string} A simple UUID
 */
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Multiplies two numbers (new feature in v1.1.0)
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Gets the current timestamp as ISO string (new feature in v1.1.0)
 * @returns {string} Current timestamp in ISO format
 */
function getCurrentTimestamp() {
  return new Date().toISOString();
}

/**
 * Capitalizes the first letter of a string (new feature in v1.2.0)
 * @param {string} str - The string to capitalize
 * @returns {string} String with first letter capitalized
 */
function capitalize(str) {
  if (!str || typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Formats a number as currency (new feature in v1.2.0)
 * @param {number} amount - The amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

/**
 * Shuffles an array randomly (new feature in v1.2.0)
 * @param {Array} array - The array to shuffle
 * @returns {Array} A new shuffled array
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Checks if a string is a valid email (new feature in v1.2.0)
 * @param {string} email - The email to validate
 * @returns {boolean} True if valid email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = {
  greet,
  add,
  multiply,
  getVersion,
  generateId,
  getCurrentTimestamp,
  capitalize,
  formatCurrency,
  shuffleArray,
  isValidEmail
};
