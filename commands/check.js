const { createPromptModule } = require("inquirer");

const check = {
    price(cmd) {
        console.log(cmd.coin, cmd.cur);
    }
};

module.exports = check;