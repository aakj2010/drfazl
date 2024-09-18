const fs = require('fs');
const path = require('path');

const jsonContent = require('./tam-quran.json');

// Access the title of the entire content
const title = jsonContent.title;
console.log("Title:", title);

// Function to replace <a> tags with Link elements
// function replaceAnchorWithLink(text) {
//   if (typeof text !== 'string') {
//     return text; // If not a string, return the original value
//   }
//   // Updated regex pattern to handle <a> tags
//   const replacedText = text.replace(/<a href='\/chapters\/keywords\/#(\d+)'><b>\((\d+)\)<\/b><\/a>/g, (match, id, num) => {
//     return `<Link to='/chapters/keywords'><span>${num}</span></Link>`;
//   });

//   // Debug log to verify replacement
//   if (text !== replacedText) {
//     console.log('Original Text:', text);
//     console.log('Replaced Text:', replacedText);
//   }
  
//   return replacedText;
// }
// Function to replace <a> tags with Link elements
function replaceAnchorWithLink(text) {
    if (typeof text !== 'string') {
      return text; // If not a string, return the original value
    }
  
    // Updated regex pattern to handle <a> tags with any href (including empty) and optional <b> tags
    const replacedText = text.replace(/<a href='(?:\/chapters\/keywords\/#(\d*)|)'><b>\((\d*)\)<\/b><\/a>/g, (match, id, num) => {
      if (id || num) {
        return `<Link to='/chapters/keywords'><span>${num}</span></Link>`;
      }
      return match; // Return original match if conditions are not met
    });
  
    // Debug log to verify replacement
    if (text !== replacedText) {
      console.log('Original Text:', text);
      console.log('Replaced Text:', replacedText);
    }
    
    return replacedText;
  }
  

// Process each chapter and its verses
if (jsonContent && Array.isArray(jsonContent.chapters)) {
  const updatedChapters = jsonContent.chapters.map(chapter => {
    if (Array.isArray(chapter.verses)) {
      // Process each verse in the chapter
      const updatedVerses = chapter.verses.map(verse => ({
        ...verse,
        text: replaceAnchorWithLink(verse.text)
      }));

      // Return the updated chapter with the modified verses
      return {
        ...chapter,
        verses: updatedVerses
      };
    }
    return chapter;
  });

  // Define the output file path
  const outputPath = path.join(__dirname, 'updated-tam-quran.json');

  // Write the updated content to the new file
  fs.writeFile(outputPath, JSON.stringify({ chapters: updatedChapters }, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Updated JSON file created successfully:', outputPath);
    }
  });
} else {
  console.error('jsonContent.chapters is not an array');
}
