
export class Student{
    private firstName: string;
    private lastName: string;
    
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
}