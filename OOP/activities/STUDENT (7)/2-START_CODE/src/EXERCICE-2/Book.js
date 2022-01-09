"use strict";
exports.__esModule = true;
exports.Book = void 0;
// TODO
var Book = /** @class */ (function () {
    function Book(title, yearOfPublished) {
        this.authors = [];
        this.publishers = [];
        this.title = title;
        this.yearOfPublished = yearOfPublished;
    }
    Book.prototype.addAthor = function (authors) {
        for (var _i = 0, authors_1 = authors; _i < authors_1.length; _i++) {
            var author = authors_1[_i];
            this.authors.push(author);
        }
    };
    Book.prototype.setPublisher = function (publishers) {
        this.publishers = publishers;
    };
    return Book;
}());
exports.Book = Book;
