const fs = require('fs');

// Read the input data from the file 'Kalaisol.txt'
const chapterFilename = './Kalaisol.txt';
const chapterText = fs.readFileSync(chapterFilename, { encoding: 'utf8' });

// Use regular expression to handle different line endings and match the lines correctly
const lines = chapterText.split(/\n\s*(?=\d+\s| {4})/);

let currentIndex = -1;
const result = [];

for (const line of lines) {
    if (!line.trim()) continue;

    if (line.startsWith('    ')) {
        if (currentIndex >= 0) {
            result[currentIndex].text += ` ${line.trim()}`;
        }
    } else {
        const numberWithDots = line.trim().split(' ')[0] + '...';
        const text = line.trim().substring(line.indexOf(' ') + 1);
        result.push({ number: numberWithDots, text });
        currentIndex++;
    }
}

const outputData = JSON.stringify(result, null, 2);

fs.writeFile('tam-Kalaisol.json', outputData, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to JSON file:', err);
    } else {
        console.log('JSON data has been saved to tam-Kalaisol.json');
    }
});
