import { Score } from "./Score";
import { Student } from "./Student";
import { Topic } from "./Topic";

export class SChool {
    protected name: string;
    protected address: string;
    protected students: Student[] = [];
    protected topics: Topic[] = [];
    protected scores: Score[] = [];
    
    constructor(name: string, address: string,){
        this.name = name;
        this.address = address;
    }
    
    addStudent(student: Student){
        return this.students.push(student);
    }
    
    addTopic(topic: Topic){
        return this.topics.push(topic);
    }
    addScore(score: Score){
        return this.scores.push(score);
    }
    
    getAllStudent(){
        return this.students;
    }
    getAllTopic(){
        return this.topics;
    }
    getAllScore(){
        return this.scores;
    }

}
