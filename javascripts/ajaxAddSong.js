define(["jquery", "lodash"], function($, _) {

  // $("#button-add").click(function(e) {

    var newSong = {
      "name": $("[name='song-add']").val(), 
      "artist": $("[name='artist-add']").val(),
      "album": $("[name='album-add']").val(),
      "genre": $("[name='genre-add']").val(),
      "art": $("[name='image-add']").val()
    }


    $.ajax({
      url: "https://mistory.firebaseio.com/user/playlist2/songs.json",
      method: "POST",
      data: JSON.stringify(newSong)
    }).done(function(addedSong) {
      console.log("Your New Song is", addedSong);
    });
  });

});