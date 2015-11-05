define(["jquery", "executeMe", 'hbs!../templates/songs'], 
	function($, executeMe, Handlebars) {
  return {
    fetchData: function() {
      $.ajax({
      	url: "data/songs.json"
      	}).done(function(song) {
			$("#song-info").html(Handlebars(song));
			executeMe.executeMe(song);
		});
    }
  };
});