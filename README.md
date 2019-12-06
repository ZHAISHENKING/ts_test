# TypeScript踩坑

## 1. 类型‘EventTarget’不存在属性'TagName'

在js中实现点击dom元素打印标签名可以这样

```js
// 点击打印标签名
ul.addEventListener('click', e=>{
    e.stopPropagation();
    console.log(e.target.tagName)
})
```

同样的代码放在ts文件中会报错

<img src="https://qiniu.s001.xin/ufv20.jpg" width=600>

需要提前声明e.target为HTMLElement

最终解决

```ts
interface HTMLLIElement extends Event{
    target: HTMLLIElement & EventTarget;
}

ul.addEventListener('click', (e?:HTMLLIElement)=>{
    e.stopPropagation();
    console.log(e.target.tagName)
})
```

## 2. 类数组转换

js中类数组转换可以使用`Array.property.slice.call(obj)`来实现

```js
// 点击打印标签索引
ul.addEventListener('click', e=>{
    e.stopPropagation();
    let lis = document.getElementsByTagName('li');
    lis = [].slice.call(lis)
    alert(lis.indexOf(e.target))
})
```

在ts中会报这样的错

<center><img src="https://qiniu.s001.xin/jtq2x.jpg"></center>
所以需要有个中间变量来声明其类型为数组，包含html标签

```js
let lis = document.getElementsByTagName('li');
let arr:[HTMLLIElement] = [].slice.call(lis)
alert(arr.indexOf(e.target))
```

