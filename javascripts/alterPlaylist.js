define(["jquery", "lodash", 'hbs!../templates/songs'], 
	function($, _, Handlebars) {

	function timeToFilter (){
		var filteredPlay = playlist.slice(0);
		console.log("FILTER BUTTON PRESSED!");
		// var filteredPlaylist = $(".song");
		// console.log("did the slice work?", filteredPlay);

		var artistSelect = $("[name='artist']").val();
		var albumSelect = $("[name='album']").val();
		console.log("albumSelect", albumSelect);

	    function findArtist(value) {
          return value.artist === artistSelect;
        }
        function findAlbum(value) {
          return value.album === albumSelect;
        }

		if (artistSelect !== "") {
         filteredPlay = playlist.filter(findArtist);
		}
		if (albumSelect !== "") {
         filteredPlay = playlist.filter(findAlbum);
		}
		console.log("filteredPlay", filteredPlay);

		$("#song-info").html(Handlebars(filteredPlay));
	}

         // console.log("playlist again", playlist);

	return {
		timeToFilter: timeToFilter
	};
}); //END DEFINE FUNCTION