define(["jquery"], function($) {
  return {
    fetchData: function(executeMe) {
      $.ajax({
        url: "data/more-songs.json"
        }).done(function(data) {
          executeMe(data);
        });
    }
  };
});
