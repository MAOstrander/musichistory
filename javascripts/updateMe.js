define(function(require) {
    //DEPENDENCIES FOR REQUIRE
    var $ = require("jquery");
    var _ = require("lodash");
    var populate = require('populate-songs');

	function filterSong(thing) {
		thing = thing.replace(">", "-");
		thing = thing.replace(/[&\/\\#,+();!@$~%.*?{}]/g, '');
		return thing;
	}

	function quickAdd() {
		console.log("This will be used to create a new empty playlist and prompt for a song to add");
	}

	function fullAdd() {
		// To write a song to firebase in non-rest method
		// var newSongs = new Firebase("https://mistory.firebaseio.com/user/playlist1/songs");
		// newSongs.push({
		//   "name": fireName,
		//   "artist": fireArtist,
		//   "album": fireAlbum,
		//   "genre": fireGenre,
		//   "art": $("[name='image-add']").val()
		// });

		var newSong = {
	      "name": filterSong($("[name='song-add']").val()), 
	      "artist": filterSong($("[name='artist-add']").val()),
	      "album": filterSong($("[name='album-add']").val()),
	      "genre": filterSong($("[name='genre-add']").val()),
	      "art": $("[name='image-add']").val()
	    }

	   $.ajax({
	      url: "https://mistory.firebaseio.com/user/playlist1/songs.json",
	      method: "POST",
	      data: JSON.stringify(newSong)
	    }).done(function(addedSong) {
	      console.log("Your New Song is", addedSong);
				populate.fetchData();
	    });

	    //CLEAR THE VALUES OUT OF ADD SONG FIELDS
		$("[name='song-add']").val("");
		$("[name='artist-add']").val("");
		$("[name='album-add']").val("");
		$("[name='genre-add']").val("");
		$("[name='image-add']").val("");

		
		//Switch back to music list window
		$("#button-add").attr("disabled", "true");
		$("#song-info").show();
		$("#controls").show();
		$("#maybe-art").show();
		$("#song-input").hide();

	}

	return {
		fullAdd: fullAdd,
		quickAdd: quickAdd,
		filterSong: filterSong
	};

}); //END DEFINE FUNCTION