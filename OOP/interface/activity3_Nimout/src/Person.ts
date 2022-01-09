class Person extends Resource implements NameResource{
    private age: string;
    constructor(id: number, age: string){
        super(id);
        this.age = age;
        
        
    }
    getName(): string{
        return null;
    }

}
