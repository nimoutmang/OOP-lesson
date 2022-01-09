import { Student } from "./Student";
import { Topic } from "./Topic";
export class Score{
    private score: number;
    private student: Student;
    private topic: Topic;
    

    constructor(score: number){
        this.score = score;
    }
    
}