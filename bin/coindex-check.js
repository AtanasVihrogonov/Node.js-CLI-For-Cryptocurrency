const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Check price of coins')
    .option('--coin <type>', 'Add specific coin types and CSV format', 'BTC,ETH, XRP')
    .option('--cur <currency>', 'Change the currency', 'GBP')
    .action((cmd) => check.price(cmd));

program.parse(process.argv);