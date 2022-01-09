"use strict";
exports.__esModule = true;
// TODO
var Author_1 = require("./Author");
var Book_1 = require("./Book");
///book
var toyStory = new Book_1.Book('toyStory', 2019);
var sadStory = new Book_1.Book('sadStory', 2012);
////Author
var author1 = new Author_1.Author('Rady');
var author2 = new Author_1.Author('Ronan');
//Add Author to book
toyStory.addAthor([author1, author2]);
sadStory.addAthor([author2]);
