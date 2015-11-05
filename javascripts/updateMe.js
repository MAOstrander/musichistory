define(["jquery", "lodash"], function($, _) {

	function filterSong(thing) {
		thing = thing.replace(">", "-");
		thing = thing.replace(/[&\/\\#,+()!@$~%.*?{}]/g, '');
		return thing;
	}

	function updateMe() {
		var playlist = [];
		var filterArtist = [];
		var index = playlist.length;
		playlist[index] = {};
		playlist[index].title = filterSong($("[name='song-add']").val() );
		playlist[index].artist = filterSong($("[name='artist-add']").val() );
		playlist[index].album = filterSong($("[name='album-add']").val() );
		playlist[index].genre = filterSong($("[name='genre-add']").val() );

		output = "<div class='song'><h2>" + playlist[index].title + 
				"</h2><ul><li>" + playlist[index].artist + 
				"</li><li class='middle'>" + playlist[index].album + 
				"</li><li>" + playlist[index].genre + 
				"</li></ul> <button class='delete-song btn btn-default' type='button'>Delete</button> </div>";

		$("#song-info").prepend(output);

		$("[name='song-add']").val("");
		$("[name='artist-add']").val("");
		$("[name='album-add']").val("");
		$("[name='genre-add']").val("");

		// Putting the songs Artists into the filter
		// $("#artist").html("");
		for (var i = 0; i < playlist.length; i++) {
			$("#artist").append("<option class='filter-artist'>" + playlist[i].artist + "</option>");
			$("#album").append("<option class='filter-album'>" + playlist[i].album + "</option>");
		}

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
		$("#song-input").hide();
	}

	return {
		updateMe: updateMe,
		filterSong: filterSong
	};

}); //END DEFINE FUNCTION