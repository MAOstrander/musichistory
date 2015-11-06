define(["jquery", "executeMe", 'hbs!../templates/songs'], 
	function($, executeMe, Handlebars) {
  return {
    fetchData: function() {

      var mySongs = new Firebase("https://mistory.firebaseio.com/");
      mySongs.on("value", function(snapshot) {
        var song = snapshot.child("user2").val();
        console.log("playlist", song);
        $("#song-info").html(Handlebars(song));
        }
      );


      // function(snapshot) {
      //   var playlist = snapshot.child("User").child("playlist1").val();
      //   var q;
      //   for (var i = 1; i < 3; i++) {
      //   q = "song" + i + "";
      //   console.log("q", q);
      //   console.log("playlist", playlist[q].artist);
      //   }
      // });
      
  //     $.ajax({
  //      url: "data/songs.json"
  //      }).done(function(song) {
     // $("#song-info").html(Handlebars(song));
    //  executeMe.executeMe(song);
		// });
    }
  };
});