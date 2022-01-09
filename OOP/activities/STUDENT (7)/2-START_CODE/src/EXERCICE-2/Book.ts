import { Author } from "./Author";
import { Publisher } from "./Publisher";

// TODO

export class Book {
    title: string;
    yearOfPublished: number;
    authors: Author[] = [];
    publishers: Publisher[] = [];
    constructor(title:string, yearOfPublished: number){
        this.title = title;
        this.yearOfPublished = yearOfPublished;
    }

    addAthor(authors: Author[]){
        for ( let author of authors){
            this.authors.push(author);
        }
    }
    setPublisher(publishers: Publisher[]){
        this.publishers = publishers;
    }
}