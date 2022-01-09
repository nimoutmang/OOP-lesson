"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(name, address) {
        this.books = [];
        this.name = name;
        this.address = address;
    }
    Library.prototype.addBook = function (books) {
        for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
            var book = books_1[_i];
            this.books.push(book);
        }
    };
    return Library;
}());
exports.Library = Library;
