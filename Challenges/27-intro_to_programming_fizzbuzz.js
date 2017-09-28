/* Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом, вывод происходит по следующим правилам:

Если число делится без остатка на 3 и на 5, то вместо числа выводится слово FizzBuzz
Если число делится без остатка на 5, то вместо него выводится слово Buzz
Если число делится без остатка на 3, то вместо него выводится слово Fizz
В остальных случаях выводится само число
Функция принимает два параметра (begin и end), определяющих ("включительно") начало и конец диапазона. Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает. */

/* eslint no-console: 0 */
// BEGIN (write your solution here)
const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    }
    else if (i % 5 === 0) {
      console.log('Buzz');
    }
    else if (i % 3 === 0) {
      console.log('Fizz');
    }
    else {
      console.log(i);
    }
  }
};

export default fizzBuzz;
// END
