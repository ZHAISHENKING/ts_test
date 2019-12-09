/** tips: 类型别名与字符串字面量类型都是使用 type 进行定义 */
// 1.类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
let name1: Name = '123'
console.log(name1) // 123

// 2.字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(e: Element, event: EventNames){
    // do something
}

// 3. 元组
let om: [string, number];
om[0] = 'Tom';

// 4. 枚举
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
// 4.1 常数枚举, 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
const enum Directives {
    Up, Down, Left, Right
}
// 4.2 外部枚举, 常出现在声明文件中
declare enum Directions {
    Up, Down, Left, Right
}
