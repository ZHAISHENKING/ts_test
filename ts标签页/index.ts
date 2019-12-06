/** 
 * 为代码简洁，这个示例使用jquery
 * 步骤: 
 * 1. 定义一个数组，数组中有抽象出的tab内容对象
 * 2. dom触发点击事件，tab内容切换到数组对应下标的对象
 * 3. 渲染dom
 */

declare var $: (selector: string) => any;

class Content {
    name: string;

    constructor(name){
        this.name = name;
    }
}
 let tabList: Content[] = [
     new Content("tab1"),
     new Content("tab2"),
 ]

 interface HTMLLIElement extends Event{
    target: HTMLLIElement & EventTarget;
}

$('ul').click((e?:HTMLLIElement)=>{
    e.stopPropagation();
    const lis = $('li')
    let arr:[HTMLLIElement] = [].slice.call(lis)
    let index:number = arr.indexOf(e.target)
    render(tabList[index]['name'])
})

function render(content:string){
    $('#container').html(content)
}