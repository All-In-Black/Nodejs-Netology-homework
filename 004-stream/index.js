const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playGame(file) {
    const randomNum = Math.floor(Math.random() * 2) + 1;
    console.log('Я загадал число от 1 до 2. Попробуй угадать!');
    rl.question('Введите число: ', (answer) => {
        let guess = parseInt(answer);

        if (guess === randomNum) {
            console.log(`Вы угадали, это число : ${randomNum}`);

        } else {
            console.log(`К сожалению вы не угадали, правильный ответ : ${randomNum} \n  Попробуйте еще раз!`);
        }

        const logData = `Загаданное число ${randomNum}, Ответ пользователя ${guess} \n`;
        fs.appendFileSync(file, logData);

        rl.question('Хочешь сыграть ещё раз?(y, n)', (answer) => {
            if (answer.toLowerCase() === 'y') {
                playGame(file);
            } else {
                console.log('Спасибо за игру!');
                rl.close();
            }
        })
    });
}

const file = 'game.txt';
fs.writeFileSync(file, '');
playGame(file);
