define(function(require) {
  var $ = require("jquery");
  var Q = require("q");

  function deleteSong(songKey) {
    var defferedDelete = Q.defer();

    console.log("YOU ARE IN THE DELETEPROMISE MODULE");
	console.log("this", songKey);


    $.ajax({
		  url: "https://mistory.firebaseio.com/user/playlist1/songs/" + songKey + "/.json",
		  method: "DELETE"
		})
    .done(function(addedSong) {
      console.log("Yay, it deleted!");
      defferedDelete.resolve(); //Do I need to pass anything into this? Do I need it at all?
    })
    .fail(function(xhr, status, error) {
      defferedDelete.reject(error); //Promise Rejection if call failed
    });

    return defferedDelete.promise;
  };

  return deleteSong; //return statement for the file

});