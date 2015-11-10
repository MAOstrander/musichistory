requirejs.config({
	baseUrl : "./javascripts/",
	shim : {
		bootstrap : {
            deps : [ 'jquery'],
            exports: 'bootstrap'
        }
	},
	paths : {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"lodash": "../lib/bower_components/lodash/lodash",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	}
});

require(["song", "hbs", "populate-songs", "get-more-songs"],
	function(song, Handlebars, populate, more) {

	  var playlist;

	  // Get the fir	st list of songs (passing a callback function reference)
	  populate.fetchData();

	  document.getElementById('more').addEventListener('click', function(event) {
		  // Get the second list of songs (passing a callback function reference)
		  more.fetchData();
	  });



	}
);