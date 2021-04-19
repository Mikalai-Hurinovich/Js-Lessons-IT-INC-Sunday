import {rejects} from "assert";
import {log} from "util";

// console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// res() и rej() принимает только один аргумент!!
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             resolve({id: 1264, name: 'Mikola'})
//             // здесь мы передадим один аргумент, который придет в then первым
//             // аргументом,
//             // напр resolve
//             // будет равен 5
//         } else {
//             reject(10)// здесь мы передадим один аргумент, который придет в then вторым аргументом, если не сработал
//             // resolve напр reject будет равен 10
//         }
//     }, 1000)
// })
//
// promise.then(resolve => {
//         console.log(resolve, 'res')
//         // @ts-ignore
//         return {...resolve, age: 28}
//     },
//     reject => {
//         console.log(reject)
//     }).then(resolve => {
//     console.log(resolve, 'res2')
// })

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             resolve({id: 1264, name: 'Mikola'})
//             // здесь мы передадим один аргумент, который придет в then первым
//             // аргументом,
//             // напр resolve
//             // будет равен 5
//         } else {
//             reject('Error')// здесь мы передадим один аргумент, который придет в then вторым аргументом, если не
//             // сработал
//             // resolve напр reject будет равен 10
//         }
//     }, 1000)
// })
// promise.then(resolve => {
//
//     console.log(resolve, 'resolve')
// })
//     // catch это тот-же второй callback, reject, его проще понимать, лучше восприятие кода, чем несколько callback'ов
//     .catch(error => {
//         throw new Error(error)
//     })


// just a plug
export default () => {
};
