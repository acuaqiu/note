function Parent(name, age) {
    this.name = name
    this.age = age
}

Parent.prototype.getName = function () {
    return this.name
}

function Child(name, age) {
    this.name = name
    Parent.call(this, name)
    this.age = age;
}

function clone(Parent, Child) {
    function F() {}
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
clone(Parent, Child)
var c = new Child('xm', 14)
c.constructor.prototype.getAge = function () {
    return this.age;
}
console.log(c)
console.log(c.getName())

var p = new Parent('xh', 88)
console.log(p)
console.log(p.getAge())