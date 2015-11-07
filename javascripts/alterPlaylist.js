define(["jquery", "lodash", 'hbs!../templates/songs'], 
	function($, _, Handlebars) {

	function timeToFilter (){
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
	} //END OF timeToFilter FUNCTION

	return {
		timeToFilter: timeToFilter
	};
}); //END DEFINE FUNCTION