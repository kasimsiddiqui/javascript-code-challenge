var bookModule = (function () {
  return {
    addBook : function (title, author, bookNum) {
      return bookModule[bookNum] = {
        "title" : title,
        "author" : author,
        "bookNum" : bookNum
      },
      console.log("Book " + bookNum + " added");
    }
  }
})();

exports.bookModule = bookModule;