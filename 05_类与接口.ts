// 1. 实现（implements），可以将不同类之间共有的特性提取成接口（interface），用implements关键字实现
interface Alarm {
    alert();
}
class Door {
}
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}
// 2. 接口可以继承接口， interface B extends interfaceA {}
// 3. 接口继承类. interface B extends classA {}
