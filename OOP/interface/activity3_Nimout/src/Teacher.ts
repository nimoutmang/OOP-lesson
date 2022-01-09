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
