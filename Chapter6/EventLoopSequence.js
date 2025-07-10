console.log('1. Start of script');

//Microtask queue (promise)
Promise.resolve().then(() =>
    console.log('2. Microtask')
);

//Timer queue
setTimeout(() => 
    console.log('3. Timer 1 '), 0);


//I/O queue
const fs = require('fs');
fs.readFile('user-details.txt', () => console.log('4. I/O operation'));

//Check queue
setImmediate(() => 
console.log('5. Immediate callback'));

//Close queue
process.on('exit', () => {
    console.log(' 6. exit event')
});

console.log('7. End of script');