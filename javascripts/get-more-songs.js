define(["jquery", "executeMe", 'hbs!../templates/songs'], 
	function($, executeMe, Handlebars) {
  return {
    fetchData: function() {
      $.ajax({
      	url: "https://mistory.firebaseio.com/user2/playlist1/songs.json"
      	}).done(function(song) {
          console.log("song", song);
          // var playlist = Object.keys(song.songs).map( function( key ){
          //   var y = song.songs[ key ];
          //   y.key = key;
          //   return y;
          // });

			$("#song-info").append(Handlebars(playlist));
			executeMe.executeMe(playlist);
		});
    }
  };
});