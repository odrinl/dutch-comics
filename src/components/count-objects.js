const fs = require('fs');

// Replace 'your_file.json' with the path to your JSON file.
const filePath =
  '/Users/audrey/Documents/GitHub/React/react-project/src/data/unique_issues.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    if (Array.isArray(jsonData)) {
      const objectCount = jsonData.length;
      console.log(`Number of objects in the JSON file: ${objectCount}`);
    } else {
      console.error('JSON data is not an array.');
    }
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
