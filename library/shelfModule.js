var book = require('./bookModule.js');

var shelfModule = (function () {
  return {
    addShelf : function (shelfName) {
      return shelfModule[shelfName] = {
        "Name" : shelfName,
      };
      console.log("Shelf " +  shelfName + "added");
    },
    removeShelf : function (shelfName) {
      delete shelfModule[shelfName],
      console.log("Shelf " + shelfName + " removed");
    },
    addBook : function (bookNum, shelfName) {
      return shelfName[book.bookNum] = bookNum,
      console.log("Book " + bookNum + " added to shelf " + shelfName);
    },
    removeBook : function (bookNum, shelfName) {
      delete shelfName[book.bookNum],
      console.log("Book " + bookNum + " removed from " + shelfName);
    }
  }
})();

exports.shelfModule = shelfModule;