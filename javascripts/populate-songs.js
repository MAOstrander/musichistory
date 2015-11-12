define(function(require) {
    //DEPENDENCIES FOR REQUIRE
    var $ = require("jquery");
    var Firebase = require("firebase");
    var Handlebars = require('hbs!../templates/songs');
    var executeMe = require("executeMe");
    var alterPlaylist = require("alterPlaylist");

    function fetchData() {
      //THIS SECTION USES NOT-REST METHOD OF A SOCKET
      var mySongs = new Firebase("https://mistory.firebaseio.com/user/playlist1");
      mySongs.on("value", function(snapshot) {
        var song = snapshot.val();
      //THIS SECTION USES REST METHOD WITH AJAX
       // $.ajax({
       //  url: "https://mistory.firebaseio.com/user/playlist1.json"
       //  }).done(function(song) {

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
