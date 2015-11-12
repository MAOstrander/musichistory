define(function(require) {
  //DEPENDENCIES FOR REQUIRE
  var $ = require("jquery");
  var Handlebars = require("hbs!../templates/songs");
  var executeMe = require("executeMe");

  return {
    fetchData: function() {
      $.ajax({
      	url: "https://mistory.firebaseio.com/user2/playlist1.json"
      	}).done(function(song) {
          console.log("song", song);
          var playlist2 = Object.keys(song.songs).map( function(key){
            var y = song.songs[key];
            y.key = key;
            return y;
          });

			$("#song-info").append(Handlebars(playlist2));
			executeMe.executeMe(playlist2);
		});
    }
  };
});