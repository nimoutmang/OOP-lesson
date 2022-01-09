abstract class Resource{
    protected id: number
    constructor(id: number){
        this.id = id;
    }
}

interface NameResource{
    getName(): string;
}

interface SkillResource{
    getSkill(): string[]
}

class Person extends Resource implements NameResource{
    private age: string;
    constructor(id: number, age: string){
        super(id)
        this.age = age;
        
        
    }
    getName(): string{
        return null;
    }

}

class Teacher extends Person implements SkillResource{
    private skills: string[]
    constructor(id: number, age: string, skills: string[]){
        super(id, age);
        this.skills = skills
    }
    getSkill(): string[]{
        return this.skills;
    }
}







