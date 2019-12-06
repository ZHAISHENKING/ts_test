var Todo = /** @class */ (function () {
    function Todo(content, status) {
        this.status = status;
        this.content = content;
    }
    return Todo;
}());
var todoLists = [
    new Todo('待办1', false),
    new Todo('待办2', true),
];
var btn = document.querySelector('#btn');
var todoList = document.getElementById('todo');
render();
function render() {
    var dom = '';
    if (todoLists.length > 0) {
        for (var _i = 0, todoLists_1 = todoLists; _i < todoLists_1.length; _i++) {
            var items = todoLists_1[_i];
            dom += "<li class=\"" + items.status + "\">" + items.content + "</li>";
        }
    }
    else
        dom += '暂无数据';
    todoList.innerHTML = dom;
}
// 点击按钮添加todo
btn.addEventListener('click', function () {
    var input = document.querySelector('#input');
    var content = input.value;
    if (!content) {
        alert('请输入内容');
        return;
    }
    todoLists.push(new Todo(content, false));
    render();
    document.querySelector('#input').value = '';
});
// 点按li删除
todoList.addEventListener('click', function (e) {
    e.stopPropagation();
    if (e.target.tagName.toLowerCase() === 'li') {
        var lis = document.getElementsByTagName('li');
        var arr = [].slice.call(lis);
        todoLists.splice(arr.indexOf(e.target), 1);
        render();
    }
});
