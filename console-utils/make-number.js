const readline = require('readline');
const yargs = require('yargs');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const argv = yargs
.usage('Usage: $0 --min <number> --max <number>')
.option('min', {
    alias: 'm',
    describe: 'Минимальное значение диапазона',
    type: 'number',
    demandOption: true
})
.option('max', {
    alias: 'M',
    describe: 'Максимальное значение диапазона',
    type: 'number',
    demandOption: true
}).argv;

// Загадываем число
const secretNumber = getRandomNumber(argv.min, argv.max);

console.log(`Загадано число в диапазоне от ${argv.min} до ${argv.max}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkNumber(guess) {
  if (guess < secretNumber) {
    console.log('Больше');
  } else if (guess > secretNumber) {
    console.log('Меньше');
  } else {
    console.log(`Отгадано число ${secretNumber}`);
    rl.close();
  }
}

// Запрашиваем ввод чисел у пользователя
rl.on('line', (input) => {
  const guess = parseInt(input);
  checkNumber(guess);
});
