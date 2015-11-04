define(["jquery"], function($) {
  return {
    fetchData: function(executeMe) {
      $.ajax({
      	url: "data/songs.json"
      	}).done(function(data) {
          executeMe(data);
        });
    }
  };
});


 