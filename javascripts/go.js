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
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	}
});

require(
	["song", "populate-songs", "get-more-songs"],
	function(song, populate, more) {

	  // Get the first list of songs (passing a callback function reference)
	  populate.fetchData();

	  document.getElementById('more').addEventListener('click', function(event) {
		  // Get the second list of songs (passing a callback function reference)
		  more.fetchData();
	  });

	}
);