define(["jquery", "lodash"], function($, _) {
	function timeToFilter (){
		console.log("FILTER BUTTON PRESSED!");
		// var filteredPlaylist = $(".song");
		// console.log("test for global playlist", playlist);
	}

	       //  function findArtist(value) {
        //   return value.artist === "Garnet";
        // }
        //  var filteredPlay = playlist.filter(findArtist);
        //  console.log("filteredPlay", filteredPlay);
        //  console.log("playlist again", playlist);

	return {
		timeToFilter: timeToFilter
	};
}); //END DEFINE FUNCTION