define(["jquery", "executeMe", 'hbs!../templates/songs'], 
	function($, executeMe, Handlebars) {
  return {
    fetchData: function() {
      $.ajax({
      	url: "data/more-songs.json"
      	}).done(function(song) {
			$("#song-info").append(Handlebars(song));
			executeMe.executeMe(song);
		});
    }
  };
});