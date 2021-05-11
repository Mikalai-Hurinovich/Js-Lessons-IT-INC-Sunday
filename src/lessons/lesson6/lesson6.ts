console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// class Test {
//     // типизация
//     name: string
//     constructor(name: string) {
//         this.name = name;
//     }
//     hi() {
//         console.log('hi')
//     }
// }
// let test = new Test('Mikola')
// console.log(test)
// -----------------

// class Animal {
//     name: string
//     constructor(name: string) {
//     this.name = name
//     }
//     eat(){
//         console.log(`Animal is eating`)
//     }
// }
// class Monkey extends Animal{
//
//     constructor(name: string) {
//         super(name); // super используется для вызова родит. конструктора,
//     }
//     sleep(){
//         console.log(`is sleeping`)
//     }
//     eat(){
//         console.log(`${this.name} is eating`)
//     }
// }
// let monkey = new Monkey('Чача')
// monkey.eat()

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// interface IStudent {
//     name: string;
//     surname: string;
//     groupNumber: number;
//     progress: number[];
//     averageMark: number;
// }
//
// class Student implements IStudent {
//     name: string;
//     surname: string;
//     groupNumber: number;
//     progress: number[];
//     averageMark: number;
//
//     constructor(name: string, surname: string, groupNumber: number, progress: number[]) {
//         this.name = name;
//         this.surname = surname;
//         this.groupNumber = groupNumber;
//         this.progress = progress;
//         this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length;
//     }
//
//     private static sortStudent(s1: Student, s2: Student) {
//         if (s1.averageMark > s2.averageMark) {
//             return 1;
//         } else if (s1.averageMark < s2.averageMark) {
//             return -1;
//         } else {
//             return 0;
//         }
//     }
//
//     static sort(arr: Array<Student>) {
//         const temp = [...arr];
//         return temp.sort(this.sortStudent);
//     }
//
//     private static isAllMarksEqual(marks: number[], mark: number) {
//         return marks.every(item => item === mark);
//     }
//
//     private static filterStudent(arr: Array<Student>) {
//         const result: Array<Student> = [];
//         arr.forEach(item => {
//             if (this.isAllMarksEqual(item.progress, 4) || this.isAllMarksEqual(item.progress, 5)) {
//                 result.push(item);
//             }
//         });
//         return result;
//     }
//
//     static printGoodStudent(arr: Array<Student>) {
//         this.filterStudent(arr).forEach(s => {
//             console.log(`Studen - ${s.surname}, Group - ${s.groupNumber}`);
//         });
//     }
// }
//
// let students: Array<Student> = [];
//
// students.push(new Student('Eugene', 'Sheuchuk', 1, [4, 4, 4, 4, 4]));
// students.push(new Student('Vlad', 'Bizin', 2, [5, 5, 5, 5, 5]));
// students.push(new Student('Hanna', 'Kicel', 3, [4, 5, 4, 5, 5]));
// students.push(new Student('Nick', 'Stone', 4, [3, 4, 3, 5, 3]));
// students.push(new Student('Alex', 'Page', 5, [3, 4, 3, 3, 4]));
// students.push(new Student('Test', 'Testovich', 6, [3, 5, 3, 5]));
//
// Student.printGoodStudent(students);


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса? // No
// Можно ли создать метод класса который будет удалять экземпляр класса? // No

// class Test {
//     one: string;
//     two: string;
//
//     constructor(one: string = 'Hello', two: string = 'World') {
//         this.one = one;
//         this.two = two;
//     }
// }

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

interface ICustomer {
    name: string
    surname: string
    address: string
    account: number
}

class Customer implements ICustomer {
    private _name: string
    private _surname: string
    private _address: string
    private _account: number

    constructor(name: string, surname: string, address: string, account: number) {
        this._name = name
        this._surname = surname
        this._address = address
        this._account = account
    }

    get name() {
        return this._name;
    }

    set name(n) {
        this._name = n;
    }

    get surname() {
        return this._surname;
    }

    set surname(s) {
        this._surname = s;
    }

    get address() {
        return this._address;
    }

    set address(f) {
        this._address = f;
    }

    get account() {
        return this._account;
    }

    set account(g) {
        this._account = g;
    }

    print() {
        console.log(`${this.name} ${this.surname}, Address - ${this.address}, Account - ${this.account}`)
    }

    static sort(c1: ICustomer, c2: ICustomer) {
        if (c1.name > c2.name) return 1;
        else if (c1.name < c2.name) return -1;
        else return 0;
    }
}

let custs = []
custs.push(new Customer('Mikola', 'Hurinovich', 'Minsk', 1))
custs.push(new Customer('Petr', 'Hurinovich', 'Minsk', 1))
custs.push(new Customer('Vova', 'Hurinovich', 'Minsk', 1))

custs[0].print()
custs.sort(Customer.sort)
console.log(custs)
// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};
