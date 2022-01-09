class User{
    constructor(public name:string){}

}
class Post{
    constructor(public title: string, public liker:User[] = []){}
    getLiker(): number{
        return this.liker.length
    }

}
let sok = new User("Sok");
let kim = new User("Kim");
let p = new Post("myPost")
p.liker = [sok, kim]
console.log(p.getLiker())