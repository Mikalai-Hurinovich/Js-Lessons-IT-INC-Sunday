console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
const sum = (a: number) => {
    return function (b: number) {
        return a + b;
    }
}
console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// const makeCounter = () => {
//     let count = 0;
//     return () => {
//         return ++count;
//     }
// }

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const makeCounter = (count: number) => {
    return {
        increase: () => ++count,
        decrease: () => --count,
        reset() {
            return count = 0
        },
        set: (newCount: number) => count = newCount,
        getCount: () => count
    }
}
let counter = makeCounter(10)
console.log(counter.getCount())
console.log(counter.set(20))
console.log(counter.reset())
console.log(counter.decrease())
console.log(counter.increase())

const sumByLoop = (n: number) => {
    let result = 0
    for (let i = n; i >= 0; i--) {
        result += i
    }
    return result
}
sumByLoop(100) // 5050
// Решение через рекурсию
// const sumTo = (n: number): number => {
//     if (n === 1) return n;
//     return n + sumTo(n - 1)
// }

// Решение через хвостовую рекурсию, когда стэк вызовов не переполняется (но в JS пока не используется)
const sumTo = (n: number, acc: number): number => {
    if (n === 1) return acc + n;
    return sumTo(n - 1, acc + n)
}
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1.
// Факториал n обозначается как n!
// const factorial = (n: number): number => {
//     return n === 1 ? 1 : n * factorial(n - 1)
// }
// factorial(3)

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n: number): any {
    if (n === 0) return 0;
    if(n === 1) return (num: number) => num;
    let _arguments: number[] = [];

    function helper(...args: number[]){
        _arguments = [..._arguments, ...args]
        if(_arguments.length >= n){
            return _arguments.reduce((acc, i) => acc + i)
        } else{
            return helper;
        }
    }
    return helper;
}

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
function flatDeep(arr: Array<any>, d = 1): any {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
};
flatDeep([1, 2, [3, 4, [5, 6]]], Infinity);

// just a plug
export default () => {
};
