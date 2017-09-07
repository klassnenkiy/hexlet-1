/* Дан массив чисел. Каждое число в массиве встречается четное количество раз, кроме одного.

Реализуйте и экспортируйте функцию по умолчанию, которая принимает массив чисел
и возвращает число, который встречается нечетное количество раз. */

export default (arr) => arr.filter(elem => arr.filter(item => item === elem).length % 2 !== 0)[0];
