const fs = require('fs');

// Define the number of chapters
const numChapters = 114;

// Build the JSON object
const book = {
  title: 'The Book',
  chapters: [],
};

for (let chapterNumber = 1; chapterNumber <= numChapters; chapterNumber++) {
  // Read the chapter file
  const chapterFilename = `chapter${chapterNumber}.txt`;
  const chapterText = fs.readFileSync(chapterFilename, { encoding: 'utf8' });

  // Parse the chapter content
  const verseRegex = /(\d+\.\d+)\s+(.*)/g;
  const verses = [];

  let match;
  while ((match = verseRegex.exec(chapterText))) {
    const [_, verseNumber, verseText] = match;
    verses.push({
      number: verseNumber,
      text: verseText.trim(),
    });
  }

  // Add the chapter to the book object
  book.chapters.push({
    number: chapterNumber,
    verses,
  });
}

// Write the output to a file
fs.writeFileSync('tam-quran.json', JSON.stringify(book, null, 2));
