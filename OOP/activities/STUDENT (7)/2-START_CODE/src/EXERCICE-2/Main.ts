
// TODO
import { Author } from "./Author";
import { Book } from "./Book";
import { Library } from "./Library";
import { Publisher } from "./Publisher";


///book
let toyStory = new Book('toyStory', 2019);
let sadStory = new Book('sadStory', 2012);

////Author
let author1 = new Author('Rady');
let author2 = new Author('Ronan');

//Add Author to book
toyStory.addAthor([author1, author2]);
sadStory.addAthor([author2]);

