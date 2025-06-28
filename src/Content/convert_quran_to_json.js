const fs = require('fs');
const path = require('path');

// Read the text file
const inputFile = path.join(__dirname, 'src', 'Content', 'eng-quran-ayats.txt');
const outputFile = path.join(__dirname, 'src', 'Content', 'eng-quran-converted.json');

function convertQuranToJson() {
    try {
        // Read the file content
        const content = fs.readFileSync(inputFile, 'utf8');
        const lines = content.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        
        const result = {
            chapters: []
        };
        
        let currentChapter = null;
        let i = 0;
        
        // Skip the title lines at the beginning
        while (i < lines.length && !lines[i].startsWith('Chapter')) {
            i++;
        }
        
        while (i < lines.length) {
            const line = lines[i];
            
            // Check if this is a chapter header
            if (line.startsWith('Chapter ')) {
                // Save previous chapter if exists
                if (currentChapter) {
                    result.chapters.push(currentChapter);
                }
                
                // Extract chapter number
                const chapterMatch = line.match(/Chapter (\d+)/);
                if (chapterMatch) {
                    const chapterNumber = parseInt(chapterMatch[1]);
                    
                    // Get chapter title (next line)
                    i++;
                    const title = i < lines.length ? lines[i] : '';
                    
                    currentChapter = {
                        title: title,
                        number: chapterNumber,
                        verses: []
                    };
                }
            }
            // Check if this is a verse
            else if (currentChapter && line.match(/^\d+\.\d+/)) {
                // Parse verse number and text
                const verseMatch = line.match(/^(\d+\.\d+)\s+(.+)$/);
                if (verseMatch) {
                    const verseNumber = verseMatch[1];
                    let verseText = verseMatch[2];
                    
                    // Remove footnote references like (1), (2), etc.
                    verseText = verseText.replace(/\(\d+\)\s*$/g, '').trim();
                    
                    currentChapter.verses.push({
                        number: verseNumber,
                        text: verseText
                    });
                }
            }
            // Handle verses that might have different formatting (like 2:6 instead of 2.6)
            else if (currentChapter && line.match(/^\d+:\d+/)) {
                const verseMatch = line.match(/^(\d+):(\d+)\s+(.+)$/);
                if (verseMatch) {
                    const chapterNum = verseMatch[1];
                    const verseNum = verseMatch[2];
                    const verseNumber = `${chapterNum}.${verseNum}`;
                    let verseText = verseMatch[3];
                    
                    // Remove footnote references
                    verseText = verseText.replace(/\(\d+\)\s*$/g, '').trim();
                    
                    currentChapter.verses.push({
                        number: verseNumber,
                        text: verseText
                    });
                }
            }
            
            i++;
        }
        
        // Add the last chapter
        if (currentChapter) {
            result.chapters.push(currentChapter);
        }
        
        // Write the JSON file
        fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), 'utf8');
        
        console.log(`Successfully converted ${result.chapters.length} chapters to JSON`);
        console.log(`Output saved to: ${outputFile}`);
        
        // Display some statistics
        const totalVerses = result.chapters.reduce((sum, chapter) => sum + chapter.verses.length, 0);
        console.log(`Total verses: ${totalVerses}`);
        
        // Show first few chapters as preview
        console.log('\nPreview of first 3 chapters:');
        result.chapters.slice(0, 3).forEach(chapter => {
            console.log(`Chapter ${chapter.number}: ${chapter.title} (${chapter.verses.length} verses)`);
        });
        
    } catch (error) {
        console.error('Error converting file:', error.message);
    }
}

// Run the conversion
convertQuranToJson(); 