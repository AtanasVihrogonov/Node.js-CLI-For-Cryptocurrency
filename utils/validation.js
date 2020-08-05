const { createPromptModule } = require("inquirer");

// Required fields
const isRequired = input => input === '' ? 'This value is required' : true;

module.exports = { isRequired };