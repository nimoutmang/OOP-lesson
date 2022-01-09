abstract class Animal{
    protected name: string
    constructor(name: string) {
        this.name=name
    }
    abstract playSound();
}
class Dog extends Animal{
    color: string
    constructor(name: string, color: string) {
        super(name);
        this.color=color
    }
    playSound() {
        console.log('Woof!!');
    }
}
class Cat extends Animal{
    playSound() {
        console.log('MeoWW!!!');
        
    }
}

let cat = new Cat('Kathy');
cat.playSound()
let dog = new Dog('Jery','Black');
dog.playSound()