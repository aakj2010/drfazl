const fs = require('fs');
const path = require('path');

// Input and output paths
const inputPath = path.join(__dirname, './eng-glossaries.txt');
const outputPath = path.join(__dirname, 'eng-glossaries.json');

// Read the text file
const text = fs.readFileSync(inputPath, 'utf8');

// Regex pattern to match entries like: (1). [1.1] followed by text
const entryPattern = /\((\d+)\)\.\s\[(\d+\.\d+)\]\s+(.*?)(?=\(\d+\)\.\s\[\d+\.\d+\]|\Z)/gs;

// Extract and build the JSON structure
const glossaries = [];
let match;

while ((match = entryPattern.exec(text)) !== null) {
  const number = parseInt(match[1], 10);
  const reference = match[2].trim();
  const content = match[3].replace(/\s+/g, ' ').trim();

  glossaries.push({
    number,
    reference,
    text: content,
  });
}

// Write the JSON file
const outputData = JSON.stringify(glossaries, null, 2);
fs.writeFile(outputPath, outputData, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to JSON file:', err);
    } else {
        console.log('JSON data has been saved to eng-Kalaisol.json');
    }
});

console.log(`✅ Converted to JSON: ${outputPath}`);
