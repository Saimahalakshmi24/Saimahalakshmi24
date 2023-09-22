const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  fs.writeFile('output.txt', data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      console.log(data)
      return;
    }
    console.log('File content copied to output.txt');
  });
});