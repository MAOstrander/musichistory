requirejs.config({
	baseUrl : "./javascripts/",
	shim : {
		bootstrap : {
            deps : [ 'jquery'],
            exports: 'bootstrap'
        },
		firebase : {
            exports: 'Firebase'
        }
	},
	paths : {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"lodash": "../lib/bower_components/lodash/lodash",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		"firebase": "../lib/bower_components/firebase/firebase"
	}
});

require(["song", "hbs", "populate-songs", "get-more-songs"],
	function(song, Handlebars, populate, more) {

	  var playlist;

	  // Get the first list of songs (passing a callback function reference)
	  populate.fetchData();

	  document.getElementById('more').addEventListener('click', function(event) {
		  // Get the second list of songs (passing a callback function reference)
		  more.fetchData();
	  });



	}
);