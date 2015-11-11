define(["jquery", "executeMe", 'hbs!../templates/songs', "alterPlaylist"], 
	function($, executeMe, Handlebars, alterPlaylist) {

    function fetchData() {
      //COMMENTED SECTION USES NOT-REST METHOD OF A SOCKET
      // var mySongs = new Firebase("https://mistory.firebaseio.com/user/playlist1");
      // mySongs.on("value", function(snapshot) {
      //   var song = snapshot.val();
       $.ajax({
        url: "https://mistory.firebaseio.com/user/playlist1.json"
        }).done(function(song) {

        console.log("playlist", song.songs);

      playlist = Object.keys(song.songs).map( function( key ){
          var y = song.songs[ key ];
          y.key = key;
        return y;
       });
      console.log("playlist", playlist);

      // This looks at the NAME in each item of the playlit and sorts alphabetically
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
         alterPlaylist.checkArt();
      }); //mysongs.on snapshot
    }  //fetchdata function

  return {

      fetchData: fetchData,
  }; //return statement for the file
});
