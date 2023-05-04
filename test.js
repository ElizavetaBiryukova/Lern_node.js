// const { stdin, stdout } = process;

stdout.write('Как тебя зовут?\n');
stdin.on('data', data => {
    stdout.write('Привет, ');
    const dataStringified = data.toString();
    stdout.write(dataStringified.split('').reverse().join(''));
    process.exit();
});

process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));

console.log(process.argv);
console.log(process.argv.slice(2));

function getValue(flag) {
    const flagIndex = process.argv.indexOf(flag);
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}
const message = getValue('-m');
console.log(message);

// Напишите программу, которая просит у пользователя ввести два числа, складывает эти числа, если запускается с флагом -s, или перемножает, если запускается с флагом -m, после чего завершает свою работу. Для ввода и вывода информации используйте стандартные потоки ввода/вывода. Пример работы (пользовательский ввод начинается с >)

// const { stdout, stdin, exit } = process;
const flag = process.argv[2];
const allowedFlags = ['-m', '-s'];
if (!allowedFlags.includes(flag)) {
    stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
    exit();
}
stdout.write('Введите, пожалуйста, два числа\n');
stdin.on('data', data => {
    const numString = data.toString();
    const numStringsArray = numString.split(' ');
    const hasIncorrectLength = numStringsArray.length !== 2;
    const hasIncorrectValues = numStringsArray.some(numStr => Number.isNaN(+numStr));
    if (hasIncorrectLength || hasIncorrectValues) {
        stdout.write('Нужно ввести 2 числа, разделенных пробелом');
        exit();
    }
    const [firstNum, secondNum] = numStringsArray.map(numStr => +numStr);
    if (flag === '-s') {
        const sum = firstNum + secondNum;
        stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
    } else {
        const mult = firstNum * secondNum;
        stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
    }
    exit();
});

console.log(__dirname);
console.log(__filename);

// Напишите программу, которая возвращает путь к папке, если запускается с флагом '-d', или путь к файлу, если запускается с флагом '-f'. Если файл запускается без флага или с флагом, отличным от указанных в задании, выводится предложение запустить программу с флагом '-d' или '-f'.

const { stdin, stdout } = process;

const flagIndexD = process.argv.indexOf('-d');
const flagIndexF = process.argv.indexOf('-f');
if (flagIndexD !== -1) {
    console.log(__dirname);
} else if (flagIndexF !== -1) {
    console.log(__filename);
} else {
    stdout.write('Запустите программу с флагом -d или -f');
}