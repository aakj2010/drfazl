const fs = require('fs');
const path = require('path');

// Load the JSON content
const jsonContent = require('./tam-Kalaisol.json');

// Function to replace <a> tags with Link elements
function replaceAnchorWithLink(text) {
    if (typeof text !== 'string') {
        return text; // If not a string, return the original value
    }

    // Updated regex to handle <a> tags with optional surrounding <b> and <span> tags, and optional trailing text
    const replacedText = text.replace(/<a href='(?:\/chapters(?:\/#(\d+))?|)'><(?:b|span)>(\d+)<\/(?:b|span)><\/a>(.*?)<\/(?:b|span)?>/g, (match, id, num, trailingText) => {
        const chapterNumber = id || num;
        if (chapterNumber) {
            // Replace the <a> tag with <Link> and keep trailing text
            return `<Link to='/chapters/${chapterNumber}'><span>${chapterNumber}</span></Link>${trailingText}`;
        }
        return match; // Return original match if no valid number found
    });

    return replacedText;
}

// Process the chapters array
if (jsonContent && Array.isArray(jsonContent.chapters) && jsonContent.chapters.length > 0) {
    // Extract the single chapter object
    const chapter = jsonContent.chapters[0];
    
    // Check if this chapter has verses and process them
    if (Array.isArray(chapter.verses)) {
        const updatedVerses = chapter.verses.map(verse => ({
            ...verse,
            text: replaceAnchorWithLink(verse.text) // Replace <a> tags in verse text
        }));

        // Update the chapter with the modified verses
        chapter.verses = updatedVerses;

        // Define the output file path
        const outputPath = path.join(__dirname, 'updated-tam-kalaisol.json');

        // Write the updated content to the new file
        fs.writeFile(outputPath, JSON.stringify(jsonContent, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Updated JSON file created successfully:', outputPath);
            }
        });
    } else {
        console.error('The chapter object does not contain a valid verses array');
    }
} else {
    console.error('jsonContent.chapters is not an array or is empty');
}
