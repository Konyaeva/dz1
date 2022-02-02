const colors = require('colors/safe');

let start = +process.argv[2];
let end = +process.argv[3];
let color_flag = 0; // цвет текущей цифры
let count = 0;      // счетчик простых чисел
let prime = [];     // массив для простых чисел

const isPrime = (num) => { // проверка числа на простое
};

if (isNaN(start) || isNaN(end)) {
  console.log("ОШИБКА. Один или оба аргумента не число.");
  count = true;
} else if (start > end) {
  start = end + (end = start) - start; // обмен значений
}

for(let i = start; i <= end; i++) {
  if (i < 2) {
    break;
  }

  let j = 2;

  while (j <= i / 2) {
    if (i % j === 0) {
      break;
    }
    j++;
  }
  prime.push(i);
}

if(!prime.length) console.log(colors.red("Нет простых чисел"));
else {
  for(let i = 0; i < prime.length; i++) {
    if(i%3 === 0) {
      console.log(colors.green(prime[i]));
    } else if(i%2 === 0) console.log(colors.yellow(prime[i]));
    else console.log(colors.red(prime[i]));
  }
}

