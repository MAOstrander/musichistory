define(["jquery", "lodash"], function($, _) {

  // $("#button-add").click(function(e) {
  function addCurrentPlaylist() {

    var newSong = {
      "name": $("[name='song-add']").val(), 
      "artist": $("[name='artist-add']").val(),
      "album": $("[name='album-add']").val(),
      "genre": $("[name='genre-add']").val(),
      "art": $("[name='image-add']").val()
    }


    $.ajax({
      url: "https://mistory.firebaseio.com/user/playlist1/songs.json",
      method: "POST",
      data: JSON.stringify(newSong)
    }).done(function(addedSong) {
      console.log("Your New Song is", addedSong);
    });
  };

  return {
      addCurrentPlaylist: addCurrentPlaylist,
  }; //return statement for the file

});