/** 
Note: 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能
声明文件必需以 .d.ts 为后缀
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
export 导出变量
export namespace 导出（含有子属性的）对象
export default ES6 默认导出
export = commonjs 导出模块
export as namespace UMD 库声明全局变量
declare global 扩展全局变量
declare module 扩展模块
/// <reference /> 三斜线指令
 */

// 全局变量
declare var $: (selector: string) => any;
// 全局函数
declare function jQuery(selector: string): any;
// 全局变量是一个类
declare class Animal {
    name: string;
    constructor(name: string);
    sayHi(): string;
}
// 枚举
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

// 声明合并, jQuery既是一个函数，又是一个对象，拥有子属性
declare function jQuery(selector: string): any;
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}