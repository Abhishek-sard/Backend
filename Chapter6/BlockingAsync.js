const fs = require('fs');

console.log('1. Start of script');

//synchronous (blocking) operation
console.log('2. Reading file synchronously');
const dataSync = fs.readFileSync('user-details.txt', 'utf8');
console.log('3. Synchronous file read complete:');


//Asynchronous (non-blocking) operation
console.log('4. Reading file asynchronously');
fs.readFile('user-details.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('5. Error reading file:', err);
    return;
  };
  console.log('6. Asynchronous file read complete:');
  console.log(data);
});

console.log('7. End of script');