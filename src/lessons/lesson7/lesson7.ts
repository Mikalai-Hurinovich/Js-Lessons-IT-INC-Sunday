console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI

// class Test {
//     callTest(){
//
//     }
// }
//
// const t1 = new Test()
// const t2 = new Test()
//
// console.log(t1)
// console.log(t2)
//
// t1.__proto__.sayHi = () => {
//     return 'Hello Proto!'
// }
// console.log('t2:',t2.sayHi())
// console.log('t1:',t1.sayHi())

//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal {
    name: string;

    constructor(name: string = "Animal") {
        this.name = name;
    }

    walk() {
        return `${this.name} walking`
    }

    eat() {
        return `${this.name} eating`
    }

    sleep() {
        return `${this.name} sleeping`
    }
}

let frog = new Animal('Dorsi');
console.log(frog.eat())
console.log(frog.walk())
console.log(frog.sleep())


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

class Monkey extends Animal {

    constructor(name: string = 'Monkey') {
        super(name);
    }

    roar() {
        return `${this.name} roaring`
    }

    climb() {
        return `${this.name} climbing`
    }
}

let garlem = new Monkey('Garlem')
console.log(garlem.roar())
console.log(garlem.climb())
console.log(garlem.sleep())


//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают
class Human extends Monkey {
    constructor(name: string = 'Human') {
        super(name);
    }

    speak() {
        return `${this.name} speaking`
    }

    think() {
        return `${this.name} thinking`
    }
}

const dumbHuman = new Human('Mikola');
console.log(dumbHuman.speak())
console.log(dumbHuman.think())
console.log(dumbHuman.eat())

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05
// Используя метод Apply реализовать свой собственный метод bind



// Function.prototype.customBind = function (ctx, ...args){
//     const _this = this;
//     return function (...args2){
//         return _this.apply(ctx, [...args, ...args2])
//     }
// }

// or

// Function.prototype.customBind2 = function (ctx, ...args) {
//     ctx.___someValue___ = this;
//     return function (...args) {
//         return ctx.___someValue___(...args)
//     }
// }

// const mikola = {
//     name: 'Mikola',
//     sayName(){
//         return this.name
//     }
// }
// const peter = {
//     name: 'Peter',
//     sayName(){
//         return this.name
//     }
// }
// peter.sayName.customBind(mikola)()

// just a plug
export default () => {
};
