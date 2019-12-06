class Todo {
    content: string;
    status: false;

    constructor(content,status){
        this.status = status;
        this.content = content;
    }
}
interface HTMLLIElement extends Event{
    target: HTMLLIElement & EventTarget;
}

let todoLists: Todo[] = [
    new Todo('待办1', false),
    new Todo('待办2', true),
]

let btn = document.querySelector('#btn');
let todoList:HTMLElement = document.getElementById('todo')
render();

function render(){
    let dom = '';
    if (todoLists.length > 0){
        for (let items of todoLists) {
            dom += `<li class="${items.status}">${items.content}</li>`
        }
    }else dom+='暂无数据'
    todoList.innerHTML = dom;
}

// 点击按钮添加todo
btn.addEventListener('click', ()=>{
    let input:HTMLInputElement = document.querySelector('#input')
    let content = input.value
    if(!content){alert('请输入内容'); return;}
    todoLists.push(new Todo(content, false));
    render();
    (document.querySelector('#input') as HTMLInputElement).value = ''
})

// 点按li删除
todoList.addEventListener('click', (e?:HTMLLIElement)=>{
    e.stopPropagation();
    if (e.target.tagName.toLowerCase() === 'li'){
        let lis = document.getElementsByTagName('li');
        let arr:[HTMLLIElement] = [].slice.call(lis)
        todoLists.splice(arr.indexOf(e.target),1)
        render()
    }
})