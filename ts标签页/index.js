/**
 * 步骤:
 * 1. 定义一个数组，数组中有抽象出的tab内容对象
 * 2. dom触发点击事件，tab内容切换到数组对应下标的对象
 * 3. 渲染dom
 */
var Content = /** @class */ (function () {
    function Content(name) {
        this.name = name;
    }
    return Content;
}());
var tabList = [
    new Content("tab1"),
    new Content("tab2"),
];
$('ul').click(function (e) {
    e.stopPropagation();
    var lis = $('li');
    var arr = [].slice.call(lis);
    var index = arr.indexOf(e.target);
    render(tabList[index]['name']);
});
function render(content) {
    $('#container').html(content);
}
