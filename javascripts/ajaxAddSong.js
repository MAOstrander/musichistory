define(function(require) {
  var $ = require("jquery");
  var Q = require("q");

  function addToPlaylist() {
    var defferedSong = Q.defer();

    console.log("YOU ARE IN THE AJAXPROMISE MODULE");

    var newSong = {
      "name": $("[name='song-add']").val(), 
      "artist": $("[name='artist-add']").val(),
      "album": $("[name='album-add']").val(),
      "genre": $("[name='genre-add']").val(),
      "art": $("[name='image-add']").val()
    };


    $.ajax({
      url: "https://mistory.firebaseio.com/user/playlist1/songs.json",
      method: "POST",
      data: JSON.stringify(newSong)
    }).done(function(addedSong) {
      console.log("Your New Song is", addedSong);
      defferedSong.resolve(addedSong); //If call successful resolve promise with the data
    })
    .fail(function(xhr, status, error) {
      defferedSong.reject(error); //Promise Rejection if call failed
    });

    return defferedSong.promise;
  }

  return addToPlaylist; //return statement for the file

});
