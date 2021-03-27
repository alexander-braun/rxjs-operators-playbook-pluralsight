/*
 * 
 Author: David Mann 
 (c) 2018, Mann Software: MIT License
 
 */

// concatMap w/projection function
// map each value of source into a function
// emit the result of the function

const { of } = require('rxjs');
const { concatMap, delay } = require('rxjs/operators');

console.log('# concat map to [x, 3*x]');
of(1, 2, 3)
    .pipe(concatMap(x => [x, 3 * x]))
    .subscribe(x => console.log(x));
// Output:
// 1
// 3
// 2
// 6
// 3
// 9

console.log('\r\n________________________\r\n');
setTimeout(() => {
    // ^^^ delay until previous example completes
    //concatMap subscribes once previous completes:
    of(10, 1500, 1000, 500)
        .pipe(concatMap(delayMs => of(`Emitted after: ${delayMs} ms`).pipe(delay(delayMs))))
        .subscribe(output => console.log(output));
}, 1000);
// Output
// Emitted after: 10 ms
// Emitted after: 1500 ms
// Emitted after: 1000 ms
// Emitted after: 500 ms
