var DomElement = /** @class */ (function () {
    function DomElement(name) {
        this.children = [];
        this.name = name;
    }
    DomElement.prototype.getName = function () {
        return this.name;
    };
    DomElement.prototype.isRoot = function () {
        if (this.parent === undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    DomElement.prototype.addChild = function (child) {
        this.children.push(child);
    };
    DomElement.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    return DomElement;
}());
var html = new DomElement("html");
var head = new DomElement("head");
var body = new DomElement("body");
var title = new DomElement("title");
var a = new DomElement("a");
var h1 = new DomElement("h1");
html.addChild(head);
html.addChild(body);
head.setParent(html);
head.addChild(title);
body.setParent(html);
body.addChild(a);
body.addChild(h1);
title.setParent(head);
a.setParent(body);
h1.setParent(body);
console.log(html.getName());
console.log(body.getName());
console.log(h1.getName());
console.log(h1.isRoot());
