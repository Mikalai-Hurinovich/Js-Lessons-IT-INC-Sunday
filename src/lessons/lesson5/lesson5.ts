console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290

// let object = {
//     name: 'Mikola',
//     f() {
//         setTimeout(function () {
//             // @ts-ignore
//             console.log(this.age)
//         }, 0);
//
//     },
//     arrow: () => {
//         setTimeout(() => {
//             console.log(this)
//         }, 0)
//     }
// }
// obj.f()
// obj.arrow()

// function inner() {
//     console.log(this)
// }
// let obj = {
//     name: 'Mikola',
//     f() {
//         setTimeout(inner.bind(obj), 0);
//
//     }
// }
// obj.f()

// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта
//
type someObjType = {
    name: string;
    age: number;
}
let someObj: someObjType = {
    name: 'Eugene',
    age: 32
}

function greeting() {
    // @ts-ignore
    console.log(`My name is ${this.name}. I am ${this.age}`);
}

// @ts-ignore
someObj.greeting = greeting;
// @ts-ignore
someObj.greeting();


// let obj: any = {
//     func: () => {
//         console.log('arrow', this)
//     }
// }

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

// let counter = {
//     count: 0,
//     getCurrentCount() {
//         return this.count
//     },
//     increment() {
//         return ++this.count;
//     },
//     decrement() {
//         return --this.count;
//     },
//     setCurrentCount(newCount: number) {
//         return this.count = newCount;
//     },
//     resetCurrentCount() {
//         return this.count = 0;
//     }
// }
// console.log(counter.count)
// console.log(counter.setCurrentCount(6))
// console.log(counter.getCurrentCount())
// console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.resetCurrentCount())
// console.log(counter.count)


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// let counter = {
//     count: 0,
//     getCurrentCount() {
//         return this.count
//     },
//     increment() {
//         this.count++;
//         return this;
//     },
//     decrement() {
//         this.count--;
//         return this;
//     },
//     setCurrentCount(newCount: number) {
//         this.count = newCount;
//         return this;
//     },
//     resetCurrentCount() {
//         this.count = 0;
//         return this;
//     }
// }
// console.log(counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// type myFirstConstructorFuncType = {
//     name: string
//     age: number
// }
//
// function myFirstConstructorFunc(this: myFirstConstructorFuncType, name: string, age: number) {
//     return {
//         name,
//         age,
//         greeting
//     }
// }
//
//
// // @ts-ignore
// let myConstructor = new myFirstConstructorFunc('Mikola', 28)
// console.log(myConstructor.greeting())

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {
    name: 'Two', sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};
let sayHelloOne = Two.sayHello.bind(One)()
console.log(sayHelloOne)


// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

// let helperObj = {
//     // @ts-ignore
//     changeName(name: string) {
//         // @ts-ignore
//         return this.name = name
//     },
//     // @ts-ignore
//     setAge(age: number) {
//         // @ts-ignore
//         return this.age = age
//     },
//     greeting,
// }


// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя

// function sumTwoNumbers(a: number, b: number): number {
//     return a + b
// };
//
// function bindNumber(f: Function, n: number) {
//     return f.bind(null, n)
// }
//
// let bindTen = bindNumber(sumTwoNumbers, 10)

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call


// just a plug
export default () => {
};
