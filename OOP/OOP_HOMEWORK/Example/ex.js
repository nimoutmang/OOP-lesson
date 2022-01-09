var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var Post = /** @class */ (function () {
    function Post(title, liker) {
        if (liker === void 0) { liker = []; }
        this.title = title;
        this.liker = liker;
    }
    Post.prototype.getLiker = function () {
        return this.liker.length;
    };
    return Post;
}());
var sok = new User("Sok");
var kim = new User("Kim");
var p = new Post("myPost");
p.liker = [sok, kim];
console.log(p.getLiker());
