define(["jquery", "lodash"], function($, _) {

	function filterThis (filterMe) {
		var yarp = [];
		for (var l = 0; l < filterMe.length; l++) {
			yarp[l] = filterMe.eq(l).val();
		}
			yarp = _.uniq(yarp);
		// console.log("filterMe after:", yarp);

		return yarp;
	}

	function executeMe(playlist){
		var outputSongs = [];
		// console.log("File Contents", playlist);

		//Initial Ajax population
		for (var i = 0; i < playlist.songs.length; i++) {

			outputSongs[i] = "<div class='song'><h2>" + playlist.songs[i].title + 
							"</h2><ul><li>" + playlist.songs[i].artist + 
							"</li><li class='middle'>" + playlist.songs[i].album + 
							"</li><li>" + playlist.songs[i].genre + 
							"</li></ul> <button class='delete-song btn btn-default' type='button'>Delete</button> </div>";


			$("#artist").append("<option class='filter-artist'>" + playlist.songs[i].artist + "</option>");
			$("#album").append("<option class='filter-album'>" + playlist.songs[i].album + "</option>");
			}

		// pull this out to be a function after the filter works
		var artistFiltered = filterThis($(".filter-artist"));
		var albumFiltered = filterThis($(".filter-album"));
	

		$("#artist").html("");
		for (i = 0; i < artistFiltered.length; i++) {
			// console.log("yarp", artistFiltered[i]);
			$("#artist").append("<option class='filter-artist'>" + artistFiltered[i] + "</option>");
		}

		$("#album").html("");
		for (i = 0; i < albumFiltered.length; i++) {
			// console.log("yarp", albumFiltered[i]);
			$("#album").append("<option class='filter-album'>" + albumFiltered[i] + "</option>");
		}

		// 	filterArtist[l] = a.eq(l).val();
		// 	}

		// $("#artist").html($.unique($("#artist")));


		//In 'song-info' this outputs the entire outputSongs array into the innerHTML
		$("#song-info").append(outputSongs);

	} //End of Callback Function

	return {
		executeMe: executeMe,
		filterThis: filterThis
	};

}); //END DEFINE FUNCTION