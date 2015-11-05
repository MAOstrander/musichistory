define(["jquery", "executeMe"], function($, executeMe) {
  return {
    fetchData: function() {
      $.ajax({
      	url: "data/more-songs.json"
      	}).done(function(data) {
          executeMe.executeMe(data);
        });
    }
  };
});
