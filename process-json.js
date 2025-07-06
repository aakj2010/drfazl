const fs = require('fs');
const path = require('path');

// Function to process text and wrap parenthetical references with span tags
function processText(text) {
    // Regex to match parenthetical references like (39.35), (2.148; 22.67), (48:18), (2.67 – 71), etc.
    const regex = /\(([0-9]+[.:;–\-\s]*[0-9]*[.:;–\-\s]*[0-9]*[.:;–\-\s]*[0-9]*)\)/g;
    
    return text.replace(regex, '<span>($1)</span>');
}

// Function to recursively process the JSON object
function processJsonObject(obj) {
    if (typeof obj === 'string') {
        return processText(obj);
    } else if (Array.isArray(obj)) {
        return obj.map(item => processJsonObject(item));
    } else if (typeof obj === 'object' && obj !== null) {
        const processed = {};
        for (const [key, value] of Object.entries(obj)) {
            if (key === 'text') {
                // Process the text field specifically
                processed[key] = processText(value);
            } else {
                // Recursively process other fields
                processed[key] = processJsonObject(value);
            }
        }
        return processed;
    }
    return obj;
}

// Main function
function main() {
    const inputFile = 'src/Content/eng-kalaisol.json';
    const outputFile = 'src/Content/eng-kalaisol-processed.json';
    
    try {
        // Read the JSON file
        console.log('Reading JSON file...');
        const jsonData = fs.readFileSync(inputFile, 'utf8');
        const parsedData = JSON.parse(jsonData);
        
        // Process the JSON data
        console.log('Processing JSON data...');
        const processedData = processJsonObject(parsedData);
        
        // Write the processed data to a new file
        console.log('Writing processed JSON file...');
        fs.writeFileSync(outputFile, JSON.stringify(processedData, null, 2), 'utf8');
        
        console.log(`✅ Processing complete! Output saved to: ${outputFile}`);
        console.log('\nTo replace the original file, run:');
        console.log(`mv "${outputFile}" "${inputFile}"`);
        
    } catch (error) {
        console.error('❌ Error processing file:', error.message);
        process.exit(1);
    }
}

// Run the script
main(); 