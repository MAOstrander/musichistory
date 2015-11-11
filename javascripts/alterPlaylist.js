define(["jquery", "lodash", 'hbs!../templates/songs', "executeMe"], 
	function($, _, Handlebars, executeMe) {

	function checkArt() {
		var thingValue = $("#song-info .display-hide").first().html();
		if (thingValue) {
			$("#maybe-art").html("<img src=" + thingValue + ">");
		} else {
			$("#maybe-art").html("<img src='images/yourArtHere.jpg'>");

		}
	}

	function skipSong() {
		var alter = $("#song-info .song").first();
		alter.removeClass("playing");
		$("#song-info").append(alter);
		playSong();
		checkArt();
	}

	function playSong() {
		var alter = $("#song-info .song").first().addClass("playing");
	}

	function stopSong() {
		var alter = $("#song-info .song").first().removeClass("playing");
	}

	function timeToFilter() {
		var filteredPlay = playlist.slice(0);
		var artistSelect = $("[name='artist']").val();
		var albumSelect = $("[name='album']").val();
		var genreSelect = $(':checkbox[name=genre]').map(function () {
   			if (this.checked) {
      			return this.value;
    		}
    	});

	    function findArtist(value) {
	    	if(artistSelect !== ""){
	    		return value.artist === artistSelect;
	    	} else {
	    		return value;
	    	}
        }

        function findAlbum(value) {
          if(albumSelect !== ""){
	    		return value.album === albumSelect;
	    	} else {
	    		return value;
	    	}
        }
   
   		function findGenre() {
   			var holder = [];
	   		for (var j = 0; j < filteredPlay.length; j++) {
	        	for (var i = 0; i < genreSelect.length; i++) {

	        		if (filteredPlay[j].genre === genreSelect[i]) {
	        			holder.push(filteredPlay[j]);
	        		}
				}
	        }
	        return holder;
    	}

        filteredPlay = playlist.filter(findArtist).filter(findAlbum);

    	if (genreSelect.length > 0) {
    		filteredPlay = findGenre();
    	} 


		$("#song-info").html(Handlebars(filteredPlay));
		checkArt();
	} //END OF timeToFilter FUNCTION

	// COPIED FROM STEVE'S CODE
	function lodashFilter() {
		var filteredPlay = playlist.slice(0);
		var selectedArtist = $("[name='artist']").val();

		var results = _.chain(filteredPlay)
			.filter((song) => song.artist === selectedArtist)
			.uniq('album')
			.pluck('album')
			.value();
		console.log("results", results);
	}

	return {
		timeToFilter: timeToFilter,
		skipSong: skipSong,
		playSong: playSong,
		stopSong: stopSong,
		checkArt: checkArt,
		lodashFilter: lodashFilter
	};
}); //END DEFINE FUNCTION