define(["jquery", "lodash"], function($, _) {

	function filterThis (filterMe) {
		var yarp = [];
		for (var l = 0; l < filterMe.length; l++) {
			yarp[l] = filterMe.eq(l).val();
		}
			yarp = _.uniq(yarp);

		return yarp;
	}

	function executeMe(playlist){
		//Loading playlist into filter dropdowns
		for (var i = 0; i < playlist.length; i++) {
			$("#artist").append("<option class='filter-artist'>" + playlist[i].artist + "</option>");
			$("#album").append("<option class='filter-album'>" + playlist[i].album + "</option>");
			$("#genre").append("<label><input type='checkbox' class='filter-genre' name='genre' value=" + playlist[i].genre+ ">"+ playlist[i].genre +"</label>");
		}

		var artistFiltered = filterThis($(".filter-artist"));
		var albumFiltered = filterThis($(".filter-album"));
		var genreFiltered = filterThis($(".filter-genre"));

		$("#artist").html("<option baller='true' class='filter-artist'></option>");
		for (i = 0; i < artistFiltered.length; i++) {
			$("#artist").append("<option class='filter-artist'>" + artistFiltered[i] + "</option>");
		}

		$("#album").html("<option class='filter-album'></option>");
		for (i = 0; i < albumFiltered.length; i++) {
			$("#album").append("<option class='filter-album'>" + albumFiltered[i] + "</option>");
		}

		$("#genre").html("");
		for (i = 0; i < genreFiltered.length; i++) {
			$("#genre").append("<label><input type='checkbox' class='filter-genre' name='genre' value=" + genreFiltered[i]+ ">"+ genreFiltered[i] +"</label>");
		}

	} //End of Callback Function

	return {
		executeMe: executeMe,
		filterThis: filterThis
	};

}); //END DEFINE FUNCTION