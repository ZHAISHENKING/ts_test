// 1. 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
// 使用T指代任意输入的类型， 输出则为Array<T>
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x']

// 2. 多个类型参数
// 定义泛型的时候，可以一次定义多个类型参数
function swap<A, S>(tuple: [A, S]): [S, A] {
    return [tuple[1], tuple[0]];
}

console.log(swap([7, 'seven']));

// 3. 泛型约束
// 比如让一个函数的参数和返回值必须拥有length方法时
interface Len {
    length: number;
}
function lenFunc<T extends Len>(arg: T): T {
    console.log(arg.length);
    return arg
}

// 4. 泛型接口
// 使用含有泛型的接口来定义函数的形状
interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArray2: CreateArrayFunc;
createArray2 = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray2(3, 'x');

// 5. 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 6. 为泛型指定默认类型 <T = string>