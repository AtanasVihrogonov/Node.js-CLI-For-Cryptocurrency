const inquirer = require('inquirer')
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');

const key = {
    async set() {
        const keyManager = KeyManager();
        const input =  await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key '.green + 'https://nomics.com'
            }
        ]);

        const key = keyManager.setKey(input.key);
    },
    show() {
        console.log('Hello from show');
    },
    remove() {
        console.log('Hello from remove');
    }
}

module.exports = key;