define(["jquery", "lodash"], function($, _) {

	function filterSong(thing) {
		thing = thing.replace(">", "-");
		thing = thing.replace(/[&\/\\#,+()!@$~%.*?{}]/g, '');
		return thing;
	}

	function quickAdd() {
		console.log("This will be used to create a new empty playlist and prompt for a song to add");
	}

	function fullAdd() {
		var playlist = [];
		var filterArtist = [];
		var index = playlist.length;
		playlist[index] = {};
		// playlist[index].title = filterSong($("[name='song-add']").val() );
		// playlist[index].artist = filterSong($("[name='artist-add']").val() );
		// playlist[index].album = filterSong($("[name='album-add']").val() );
		// playlist[index].genre = filterSong($("[name='genre-add']").val() );

		var fireName = filterSong($("[name='song-add']").val() );
		var fireArtist = filterSong($("[name='artist-add']").val() );
		var fireAlbum = filterSong($("[name='album-add']").val() );
		var fireGenre = filterSong($("[name='genre-add']").val() );

		var newSongs = new Firebase("https://mistory.firebaseio.com/user/playlist1/songs");
		// To write a song to firebase
		newSongs.push({
		  "name": fireName,
		  "artist": fireArtist,
		  "album": fireAlbum,
		  "genre": fireGenre
		});

		output = "<div class='song'><h2>" + fireName + 
				"</h2><ul><li>" + fireArtist + 
				"</li><li class='middle'>" + fireAlbum + 
				"</li><li>" + fireGenre + 
				"</li></ul> <button class='delete-song btn btn-default' type='button'>Delete</button> </div>";

		$("#song-info").prepend(output);

		$("[name='song-add']").val("");
		$("[name='artist-add']").val("");
		$("[name='album-add']").val("");
		$("[name='genre-add']").val("");
		$("[name='image-add']").val("");

		// Putting the songs Artists into the filter
		// $("#artist").html("");

		//NOT WORKING YET IN FIREBASE
		// for (var i = 0; i < playlist.length; i++) {
		// 	$("#artist").append("<option class='filter-artist'>" + playlist[i].artist + "</option>");
		// 	$("#album").append("<option class='filter-album'>" + playlist[i].album + "</option>");
		// }

		// var thisIsTheHolderForFilterArtist = $(".filter-artist");
		// for (var l = 0; l < thisIsTheHolderForFilterArtist.length; l++) {
		// 	filterArtist[l] = thisIsTheHolderForFilterArtist.eq(l).val();
		// 	filterArtist = _.uniq(filterArtist);
		// }
		// 	console.log("Will this update filter?", filterArtist);

		
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