define(["jquery", "executeMe", 'hbs!../templates/songs'], 
	function($, executeMe, Handlebars) {
  return {
    fetchData: function() {
      $.ajax({
      	url: "data/more-songs.json"
      	}).done(function(song) {
          var playlist = Object.keys(song.songs).map( function( key ){
            var y = song.songs[ key ];
            y.key = key;
            return y;
          });

			$("#song-info").append(Handlebars(playlist));
			executeMe.executeMe(playlist);
		});
    }
  };
});