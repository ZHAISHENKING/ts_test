// 1.基本数据类型+ts特有类型void声明
const num:number = 123
const str:string = '123'
const bool:boolean = true
const und:undefined = undefined
const nu: null = null
let u: void;
console.log(num,str,bool,und,nu, u) // 123 '123' true undefined null undefined
/**
* Note: 未指定类型时,  TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型
* 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
* let a = 7
* a = 'seven' // Error:不能将类型“"seven"”分配给类型“number”
*/

// 2. 任意值类型
let everyOne: any = 'seven';
console.log(everyOne)
everyOne = 7
console.log(everyOne)
console.log(everyOne.name)

// 3. 联合类型，表示取值可以为多种类型中的一种
let test: string | number;

// 4. 对象类型-接口
interface Person {
    readonly id: number; // 只读属性
    name: string;
    age?: number;   // 可选属性
    [propName: string]: any; // 任意属性
}

let tom: Person = {
    id: 123,
    name: 'TOM',
    age: 25,
    gender: '女'
}
/** 
 * Note: 定义的变量不允许比接口属性少或多，形状必须和接口一致
 * 如果希望不完全匹配，可使用可选属性(该属性可以不存在，但仍不允许添加)
 * interface Person {
 *     name: string;
 *     age?: number;
 * }
 * 
 * 要添加的话使用任意属性
 * interface Person {
 *     name: string;
 *     age?: nuber;
 *     [propName: string]: any;
 * }
 * */ 

// 5. 数组类型
// 5.1 类型+方括号表示法
let fib:number[] = [1,2,3]
// let fib1:number[] = [1,2,3,'1'] // 不能将类型“string”分配给类型“number”

// 5.2 数组范型
let fibonacci: Array<number> = [1, 1, 2, 3, 5];

// 5.3 接口表示
interface NumberArray {
    [index: number]: number;
}
let fib1: NumberArray = [1,2,3]

// 6. 类数组
/** 
 * Note: 
 * 类数组不是数组类型，如arguments,dom queryselector
 * 通常用接口表示，可以自定义接口，也可用TypeScript封装的接口
 */
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
function sum() {
    let args: IArguments = arguments
    console.log(args)
}

let liList: HTMLCollection = document.getElementsByTagName('li')

// 7. 函数声明
// 7.1 函数对输入输出类型进行约束
function sum2(x: number, y: number): number {
    return x + y;
}
// 7.2 函数表达式
/**
 * Note: 
 * 下面表达式等号右边的为函数声明， 左边的是对mySum变量的约束
 * 左边的=>与es6中的箭头函数意义不同，代表的是函数类型，箭头左边为输入类型，右边为输出类型
 * @param x 
 * @param y 
 */
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 7.3 接口定义函数
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
// 可选参数, 可选参数后面不允许再出现必需参数,可以跟默认参数
function buildName(name?: string, age: number = 0){
    return name + age
}
// 剩余参数, rest参数只能是最后一个参数
function push(array, ...items: any[]){
    items.forEach(function(item){
        array.push(item);
    })
}
// 函数重载，当函数体中有分支时，可能返回不同类型的值，可以使用重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}