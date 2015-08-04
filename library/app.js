var library = require("./libraryModule.js");
var shelf = require("./shelfModule.js");
var book = require("./bookModule.js");

book.bookModule.addBook("Game of Thrones", "George RR Martin", "1");
shelf.shelfModule.addShelf("shelfOne");
shelf.shelfModule.addBook("1", "shelfOne");
library.libraryModule.addShelf("shelfOne");
shelf.shelfModule.removeBook("1", "shelfOne");
shelf.shelfModule.removeShelf("shelfOne");
library.libraryModule.removeShelf("shelfOne");
