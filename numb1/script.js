//Задание 1***


// const min = prompt(30);

// if (min >= 0 && min < 15) {
//     console.log('First quarter of and house');
// } else if (min >= 15 && min < 30) {
//     console.log('Secound quarter of and house');
// } else if (min >= 30 && min < 45) {
//     console.log('Thaird quarter of and house');
// } else if (min >= 45 && 60) {
//     console.log('Fourth quarter of and house');
// }

//2***

// const num = +prompt('Enter num for 1 and 4');
// console.log('num');
// if (num === 1) {
//     console.log('winter');
// } else if (num == 2) {
//     console.log('sprong');
// } else if (mum == 3) {
//     console.log('summer');
// } else if (mum == 4) {
//     console.log('autumn');
// } else console.log('error');

//3**

// let x = 0;
// for (let i = 1; i <= 100; i++) {
//     x += i;
// }

// console.log(x);
//4



//5

// const a = prompt('Enter a ');
// console.log(a);
// const b = prompt('b');
// console.log(b);


// let x = prompt('x');
// let y = prompt('y');
// let r = prompt('r');
// let r2 = Math.pow(r, 2)

// console.log(r2);
// let z = Math.pow((a - x), 2 + Math.pow(b - y), 2);
// console.log(z);
// z <= r2 ? console.log(`the point is in the circle`) :
//     console.log(`the point is in the circle`);

//6****

const str = 8;
for (let i = 0; i < str; i++) {
    console.log(' '.repeat(str - i) + '*'.repeat(2 * i + 1));
}