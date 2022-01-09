// TODO
class Library{
    private name: string
    private address: string
    private books: Book[] = []
    constructor(name: string, address: string) {
        this.name = name
        this.address=address
    }
    addBook(book: Book) {
        this.books.push(book)
    }
    getBookFromAuthor(authorName: string): Book[]{
        let result: Book[] = []
        for (let book of this.books) {
            for (let auth of book.getAuthor()) {
                if (auth.getName() === authorName) {
                    result.push(book)
                }
            }
        }
        return result
    }
    getBookFromPublisher(publisher: string): Book[]{
        let result: Book[] = []
        for (let book of this.books) {
            if (book.getPublisher().getName() === publisher) {
                result.push(book)
            }
        }
        return result
    }
}
class Book{
    private title: string
    private yearOfPublish: number
    private authors: Author []=[]
    private publisher?: Publisher
    constructor(title: string, year: number) {
        this.title = title
        this.yearOfPublish=year
    }
    addAuthor(author: Author) {
        this.authors.push(author)
    }
    setPublisher(publisher: Publisher) {
        this.publisher=publisher
    }
    getAuthor() {
        return this.authors
    }
    getPublisher() {
        return this.publisher
    }
}
class Author{
    private name: string
    constructor(name: string) {
        this.name=name
    }
    getName(): string{
        return this.name
    }
}
class Publisher{
    private name: string
    private address: string
    constructor(name: string, address: string) {
        this.name = name
        this.address=address
    }
    getName(): string{
        return this.name
    }
}

let ibc = new Library('ibc', 'Phnom Penh');
let abc = new Publisher('ABC', 'Phnom Penh');
let john = new Author('John');
let mike = new Author('Mike');
let oop = new Book('OOP with Typescript', 2010);
let vueJs = new Book('VueJs 3', 2020);
let laravel = new Book('Laravel 8', 2019);
let javascript = new Book('Essential Javascript', 2015);

ibc.addBook(oop);
ibc.addBook(vueJs);
ibc.addBook(laravel);
ibc.addBook(javascript);

oop.setPublisher(abc);
vueJs.setPublisher(abc);
laravel.setPublisher(abc);
javascript.setPublisher(abc);

oop.addAuthor(john);
vueJs.addAuthor(john);
laravel.addAuthor(mike);
javascript.addAuthor(john)

console.log(ibc.getBookFromPublisher('ABC'));
