// LAB1
// class Calculator {
//   constructor(init = 0) {
//     this.value = init
//   }
//   add(num) {
//     this.value += num
//     return this.value
//   }
//   subtract(num) {
//     this.value -= num
//     return this.value
//   }
//   multiply(num) {
//     this.value *= num
//     return this.value
//   }
//   divide(num) {
//     this.value /= num
//     return this.value
//   }
//   show() {
//     console.log(`Value = ${this.value}`)
//   }
// }
// let result = new Calculator(200)
// result.show()
// console.log(result.add(10))
// console.log(result.subtract(20))
// console.log(result.multiply(2))
// console.log(result.divide(15))


// LAB2
// class Sale {
//   constructor(name, amount, price) {
//     this.name = name
//     this.amount = amount
//     this.price = price
//   }
//   calcPrice() {
//     return this.amount = this.amount * this.price
//   }
// }
// class Beverage extends Sale {
//   constructor(name, amount, price) {
//     super(name, amount, price)
//   }
// }
// let beverage1 = new Beverage('Pepsi', 3, 19)


// console.log(beverage1.calcPrice())


// LAB3
// function isArray(input) {
//   return Array.isArray(input)
// }
// let arr = (1,2,5,7,8)
// console.log(isArray(arr))


// LAB4
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let key = Object.keys(salaries)
// console.log(key)
// let result = key.reduce((prev,curr) => {
//   return prev += salaries[curr]
// }, 0)
// console.log(result)


// let value = Object.values(salaries)
// console.log(value)
// let result1 = value.reduce((prev, curr) => {
//   return prev += curr
// }, 0)
// console.log(result1)


// LAB1 REST
// let multiplyNum = (...args) => {
//   let result = 1
//   for (let arg of args) result *= arg
//   return result
// }
// console.log(multiplyNum(2, 6, 8, 4))


// LAB2
// let filterOutOdd = (...args) => {
//   let sum = []
//   for (let arg of args) {
//   if (arg % 2 == 0) {
//     sum.push(arg)
//     }
//   }
//   return sum
// }
// console.log(filterOutOdd(1,2,4,8,34,87,23))


// LAB3
// let mergeObj = (...objs) => {
//   let empty = {}
//   for (let obj of objs) {
//     Object.assign(empty, obj)
//   }
//   return empty
// }
// console.log(mergeObj({fname: 'qwerty', lname: 'asdfgh', nname: 'op'}))


// LAB4
// const num1 = [1, -2, 3, 4]
// const num2 = [8, 3, -8, 1]

// const sumNum = [...num1, ...num2]
// const sumNum2 = [5, ...num1, -6, -1, ...num2]
// console.log(sumNum)
// console.log(sumNum2)

// let sum = sumNum.reduce((prev, curr) => {
//   return prev += curr
// }, 0)
// console.log(sum)


// LAB5
// let spreadOperator = (num) => {
//   num[3] = num[3] ** 2
//   return num
// }
// let arr = [1, 4, 6, 8, 9]
// console.log(spreadOperator(arr))


// LAB6
// let personInfo = (fname, lname, ...hobbies) => {
//   console.log(hobbies)
//   return [fname, lname, ...hobbies]
// }

// let result = personInfo('guy', 'chonlathan', 'play','watch')
// console.log(result)


// LAB7
// let doubleAndReturnArgs = (num, ...arr) => {
//   for (let arrs in arr) {
//     arr[arrs] = arr[arrs] * 2
//   }
//   return num.concat(...arr)
// }
// let result = doubleAndReturnArgs([1, 2, 3], 4, 4)
// console.log(result)


// LAB9
// let cloneArray = (...arr) => {
//   return clone = [...arr]
// }
// let result = cloneArray(1,2,3,4,5,6)
// console.log(result)
// console.log(clone)


// LAB10
// let cloneObject = (keys, ...value) => {
//   return clone = [keys, ...value]
// }
// let arr = { name: 'John', age: 29 }
// let obj = cloneObject(arr)
// console.log(obj)
// console.log(clone)
// console.log(arr === clone)


// LAB11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi']
// console.log(first) // 'Maya
// console.log(second) // 'Marisa'
// console.log(third) // 'Chi'


// LAB12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // 'Raindrops on roses'
// console.log(whiskers); // 'whiskers on kittens'
// console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles' 'warm woolen mittens']


// LAB13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // [10, 30, 20]


// LAB14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846
// เพราะเป็นการเรียก keys


// LAB15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // [yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659]


// LAB16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // 'Your name is Alejandro and you like purple'
// getUserData({ firstName: 'Melissa' }); // 'Your name is Melissa and you like green'
// getUserData({}); // 'Your name is undefined and you like green'


// LAB17
// let guest = 'Jane';
// let admin = 'Pete';
// [guest, admin] = [admin, guest]

// console.log(guest)
// console.log(admin)


// LAB18
// let checkUserAge = (user) => {
//   let { firstName, lastName, age } = user;
//   if (age > 18) {
//     return(`สวัสดี ${firstName} ${lastName}`);
//   } else {
//     return('ไม่มีสิทธิ์เข้าใช้งาน');
//   }
// }
// const user1 = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 19
// };
// const user2 = {
//   firstName: 'Jane',
//   lastName: 'Smith',
//   age: 17
// }
// console.log(checkUserAge(user1))
// console.log(checkUserAge(user2))


// LAB19
// let user = {
//   name: 'John',
//   years: 27,
// }
// let { name, years: age, isAdmin = false } = user;

// console.log(name)
// console.log(age)
// console.log(isAdmin)


// LAB21
// let arr = [1, [2, [[[3, 4], 5], 6]]]
// let [a, [b, [[[c, d], e], f]]] = arr

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)


// LAB22
// const obj = { prop: 5, prop2: 10 }
// const { prop: a, prop2: b } = obj;
// console.log(a, b)


// LAB23
// let a, b;
// { a, b } = { a: 1, b: 2 } // error


// LAB24
// const [, , , a, b] = [1, 2, 3] // undefined undefined
// console.log(a,b)


// LAB25
// const q = { prop: 5, prop2: [10, 100] }
// const {prop: x, prop2: [,y]} = q
// console.log(x,y)


// LAB26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };
// const { prop: x, prop2: { prop2: { nested: [, y] } } } = q
// console.log(x, y)


// LAB27
// const names = [
//   { fname: 'John', lname: 'Doe' },
//   { fname: 'Jack', lname: 'Dann' },
//   { fname: 'Joe', lname: 'Dunne' }
// ]
// for (let { fname, lname } of names) {
//   console.log(`Full name: ${fname} ${lname}`);
// }


// LAB28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];
// for (const { user, age = 'unknown' } of users) {
//   console.log(`User: ${user}, Age: ${age}`)
// }