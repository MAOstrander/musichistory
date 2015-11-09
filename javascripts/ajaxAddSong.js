$("addSong").click(function(e) {

  var newSong = {
    "name": $("#songName").val(), 
    "artist": $("#songArtist").val(),
    "album": $("#songAlbum").val(),
    "genre": $("#songGenre").val(),
    "art": $("#songArt").val()
  }


  $.ajax({
    url: "https://mistory.firebaseio.com/user2/playlist1/songs.json",
    method: "POST",
    data: JSON.stringify(newSong)
  }).done(function(addedSong) {
    console.log("Your New Song is", addedSong);
  });
});