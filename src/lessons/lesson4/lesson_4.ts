console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

// async function f() {
//     let a = 10;
//     // throw 0;
//     return 5;
// }
//
// console.log(f())



// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// let promise = new Promise((res, rej) => {
//     console.log("Promise is created")
// })

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let promise = new Promise((resolve, reject) => {
//     return resolve('Promise Data')
// })
//     .then(resolve => {
//     console.log(resolve)
// })

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// let promise = new Promise((resolve, reject) => {
//     if (false) {
//         resolve('Promise Resolve')
//     } else {
//         reject('Promise Error')
//     }
// })
//     .then(res => {
//         console.log(res)
//     }, rej => {
//         console.log(rej)
//     })

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let promise = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout(() => {
//             resolve('Promise Data')
//         }, 3000)
//     } else {
//         reject('Promise Error')
//     }
// })
// promise.then(res => {
//     console.log(res)
// }, rej => {
//     console.log(rej)
// })

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


type handlePromiseType = {
    promise: null | Promise<any>
    resolve: null | Function
    reject: null | Function
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}
export const handlePromise: handlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => {
        return console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: (paramName: string) => {
        return console.log(`Promise is rejected with error: ${paramName}`)
    }
}
export const CreatePromise = () => {
    let newPromise: Promise<any> = new Promise((res, rej) => {
        handlePromise.resolve = res
        handlePromise.reject = rej
    })
    handlePromise.promise = newPromise

    newPromise.then(res => handlePromise.onSuccess(res)).catch(rej => handlePromise.onError(rej))

}
export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve('+') // если в левой части не null, тогда вызови ф-ию с (+)
}
export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject('-')
}


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("My name is")
//     }, 3000)
// })
//
// const onSuccess = (res: any) => {
//     return `${res}, Mikola!`
// }
// const print = (res: any) => console.log(res)
// promise.then(onSuccess).then(print)

// или

// let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("My name is")
//     }, 3000)
// }).then(res => {
//     return `${res}, Mikola!`
// }).then(res => {
//     console.log(res)
// })

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

// let name: Promise<{ name: string }> = new Promise((res) => {
//     setTimeout(() => {
//         res({name: "Mikola"})
//     }, 2000)
// })
// let age: Promise<{ age: number }> = new Promise((res) => {
//     setTimeout(() => {
//         res({age: 28})
//     }, 3000)
// })
// let city: Promise<{ city: string }> = new Promise((res) => {
//     setTimeout(() => {
//         res({city: 'Minsk'})
//     }, 4000)
// })
// Promise.all([name, age, city]).then(values => {
//     return console.log(values[0].name, values[1].age, values[2].city)
// })

// just a plug
export default () => {
};
