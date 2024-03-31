// NodeJS импорт
const fs = require('fs');

function reverseTextFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка чтения:', err);
            return;
        }

        const reversedText = data.split('').reverse().join('');
        fs.writeFile(filePath, reversedText, 'utf8', (err) => {
            if (err) {
                console.error('Ошибка записи:', err);
                return;
            }
            console.log('Файл успешно обращён!.');
        });
    });
}

// Usage: Provide the path to the text file as a command-line argument
const filePath = prompt("Введите путь до текстового файла:")

reverseTextFile(filePath);