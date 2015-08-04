var shelf = require("./shelfModule.js");

var libraryModule = (function () {
  return {
    addShelf : function (shelfName) {
      return libraryModule[shelfName.name] = shelfName,
      console.log("Shelf " + shelfName + " added to library");
    },
    removeShelf : function (shelfName) {
      delete libraryModule[shelfName.name],
      console.log("Shelf " + shelfName + " removed from library");
     }
   }
})();

exports.libraryModule = libraryModule;