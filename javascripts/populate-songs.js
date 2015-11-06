define(["jquery", "executeMe", 'hbs!../templates/songs'], 
	function($, executeMe, Handlebars) {
  return {
    fetchData: function() {

      var mySongs = new Firebase("https://mistory.firebaseio.com/user/playlist1");
      mySongs.on("value", function(snapshot) {
        var song = snapshot.val();
        console.log("playlist", song);

      var playlist = Object.keys(song.songs).map( function( key ){
          var y = song.songs[ key ];
          y.key = key;
        return y;
    });

      // This looks at the NAME in each item of the playlit and sorts alphabetically
      console.log("POPULATE playlist", playlist);
        playlist.sort(function(a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });


        $("#song-info").html(Handlebars(playlist));
         executeMe.executeMe(playlist);
        }
      );
      
  //     $.ajax({
  //      url: "data/songs.json"
  //      }).done(function(song) {
     // $("#song-info").html(Handlebars(song));
		// });
    }
  };
});