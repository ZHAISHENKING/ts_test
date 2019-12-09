/** 
 * Note: TypeScript中类的用法
 * public、private、protected(受保护的)
 * 1. 使用private修饰的属性或方法，在子类也不允许访问
 * 2. 使用protected修饰，在子类中允许访问
 * 3. 当构造函数修饰为 private 时，该类不允许被继承或者实例化
 * 4. 当构造函数修饰为 protected 时，该类只允许被继承
 */

 class Animal {
    protected name;
    public constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
}

// 1. readonly,只读属性关键字，只允许出现在属性声明或索引签名中
// 注意如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面
class Animal2 {
    // public readonly name;
    public constructor(public readonly name) {
        this.name = name;
    }
}

// 2. 抽象类
/** 
 * abstract 用于定义抽象类和其中的抽象方法
 * 抽象类不允许被实例化
 * 抽象类中的抽象方法必须被子类实现
 */
abstract class Animal3 {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cat1 extends Animal3 {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cat = new Cat1('Tom');