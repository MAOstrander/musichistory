var app = angular.module("MusicHistory", []);

app.controller("MusicControl", ["$q", "$http", "$scope", function($q, $http, $scope) {

	$scope.songs = [];
	$scope.filterArtist = "";
	$scope.filterAlbum = "";
	$scope.inputToggle = false;

	var getSongs = $q(function(resolve,reject) {
		$http.get('data/songs.json')
		.success(
			function(objectFromJSONFile){
				resolve(objectFromJSONFile);
			}, function(error) {
				reject(error);
			}
		);
	});

	getSongs.then(function(songs) {
		$scope.songs = songs.songs;
		console.log("songs", songs);
	}, function(error) {
			console.log("error");
		}
	);

	$scope.loadMore = function() {
		var moreSongs = $q(function(resolve,reject) {
		$http.get('data/more-songs.json')
			.success(
				function(objectFromJSONFile){
					console.log("objectFromJSONFile", objectFromJSONFile);
					resolve(objectFromJSONFile);
				}, function(error) {
					reject(error);
				}
			);
		});

		moreSongs.then(function(loadedSongs) {
			$scope.songs = $scope.songs.concat(loadedSongs.songs);
		}, function(error) {
				console.log("error");
			}
		);


	}; // END loadMore Function

	$scope.resetList = function() {
		$scope.filterArtist = "";
		$scope.filterAlbum = "";
		$scope.inputToggle = false;
	}; // END resetList Function

	$scope.addSong = function() {
		$scope.inputToggle = true;
	};

	$scope.deleteSong = function(song) {
		var songIndex = $scope.songs.indexOf(song); 
  	console.log("song", song);

		if (songIndex >= 0) {
		    $scope.songs.splice(songIndex, 1);
		  }

	}; // END deleteSong Function

//THIS IS THE OLD CODE
// function filterThis (filterMe) {
// 	var yarp = [];
// 	for (var l = 0; l < filterMe.length; l++) {
// 		yarp[l] = filterMe.eq(l).val();
// 	}
// 		yarp = _.uniq(yarp);
// 	console.log("filterMe after:", yarp);
// 	$("#artist").html("");
// 	for (var i = 0; i < yarp.length; i++) {
// 		console.log("yarp", yarp[i]);
// 		$("#artist").append("<option class='filter-artist'>" + yarp[i] + "</option>");
// 	}
// }


// function executeMe(playlist){
// 	console.log("File Contents", playlist);

// 	//Initial Ajax population
// 	for (var i = 0; i < playlist.songs.length; i++) {

// 		outputSongs[i] = "<div class='song'><h2>" + playlist.songs[i].title + 
// 						"</h2><ul><li>" + playlist.songs[i].artist + 
// 						"</li><li class='middle'>" + playlist.songs[i].album + 
// 						"</li><li>" + playlist.songs[i].genre + 
// 						"</li></ul> <button class='delete-song' type='button'>Delete</button> </div>";


// 		$("#artist").append("<option class='filter-artist'>" + playlist.songs[i].artist + "</option>");
// 		$("#album").append("<option class='filter-album'>" + playlist.songs[i].album + "</option>");
// 		}

// 	// pull this out to be a function after the filter works
// 	var a = $(".filter-artist");
// 	filterThis(a);
// 	// 	filterArtist[l] = a.eq(l).val();
// 	// 	}

// 	// $("#artist").html($.unique($("#artist")));


// 	//In 'song-info' this outputs the entire outputSongs array into the innerHTML
// 	$("#song-info").append(outputSongs);
// 	$("#song-info").append(moreButton);

// } //End of AJAX Callback Function

// function filterSong(thing) {
// 	thing = thing.replace(">", "-");
// 	thing = thing.replace(/[&\/\\#,+()!@$~%.*?{}]/g, '');
// 	return thing;
// }

// $(document).on('click', '#more', function(event) {
// 	$(this).remove();
// 	$.ajax({
// 	    url: "data/more-songs.json"
// 	}).done(executeMe);
// });


// $.ajax({
//     url: "data/songs.json"
// }).done(executeMe);

// var songs = [];
// var outputSongs = [];
// var playlist = [];
// var moreButton = "<button id='more' type='button'>Display More Songs</button>";

// var songInfo = $("#song-info");
// var songInput = $("#song-input");
// var controls = $("#controls");
// var buttonAdd = $("#button-add");
// var filterArtist = [];


// // Listening for clicks
// $("body").click( function(event) {
// 	// console.log("Event:", event);
//   // Handle the click event on my nav li
//  	if (event.target.id === "list") {
// 		songInfo.show();
// 		controls.show();
// 		songInput.hide();
// 	} else if (event.target.id === "add") {
// 		songInput.show();
// 		songInfo.hide();
// 		controls.hide();
// 	}
// });

// function update() {
// 	var index = playlist.length;
// 	playlist[index] = {};
// 	playlist[index].title = filterSong($("[name='song-add']").val() );
// 	playlist[index].artist = filterSong($("[name='artist-add']").val() );
// 	playlist[index].album = filterSong($("[name='album-add']").val() );
// 	playlist[index].genre = filterSong($("[name='genre-add']").val() );

// 	output = "<div class='song'><h2>" + playlist[index].title + 
// 			"</h2><ul><li>" + playlist[index].artist + 
// 			"</li><li class='middle'>" + playlist[index].album + 
// 			"</li><li>" + playlist[index].genre + 
// 			"</li></ul> <button class='delete-song' type='button'>Delete</button> </div>";

// 	$("#song-info").prepend(output);

// 	$("[name='song-add']").val("");
// 	$("[name='artist-add']").val("");
// 	$("[name='album-add']").val("");
// 	$("[name='genre-add']").val("");

// 	// Putting the songs Artists into the filter
// 	// $("#artist").html("");
// 	for (var i = 0; i < playlist.length; i++) {
// 		$("#artist").append("<option class='filter-artist'>" + playlist[i].artist + "</option>");
// 		$("#album").append("<option class='filter-album'>" + playlist[i].album + "</option>");
// 	};

// 	var a = $(".filter-artist");
// 	for (var l = 0; l < a.length; l++) {
// 		filterArtist[l] = a.eq(l).val();
// 		console.log("Will this update filter?", filterArtist);
// 	}
// 	//Switch back to music list window
// 	buttonAdd.attr("disabled", "true");
// 	songInfo.show();
// 	controls.show();
// 	songInput.hide();
// }

// buttonAdd.attr("disabled", "true");

// var fieldInput = $(":text");
// function validate(){
// 	if (fieldInput.eq(0).val() !== "" && 
// 		fieldInput.eq(1).val() !== "" && 
// 		fieldInput.eq(2).val() !== "" && 
// 		fieldInput.eq(3).val() !== "") {
// 		buttonAdd.removeAttr("disabled");
// 	} else {
// 		buttonAdd.attr("disabled", "true");
// 	}
// }
// fieldInput.keyup(validate);

// buttonAdd.click(update);

// $(document).on('click', '.delete-song', function(event) {
// 	$(this).parent().remove();
// });



}]);