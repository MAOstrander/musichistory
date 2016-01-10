app.controller("MusicControl", ["$q", "$http", "$scope", "$firebaseArray", "simple-songs",
	function($q, $http, $scope, $firebaseArray, songFactory) {

	$scope.songs = [];
	$scope.filterArtist = "";
	$scope.filterAlbum = "";
	$scope.albumArt = "images/yourArtHere.jpg";
	$scope.genresShown = [];

	//$scope.songId = $routParams.songId;

	var ref = new Firebase("https://mistory.firebaseio.com/user/playlist1/songs");
	console.log("ref", ref);

	// Instead of snapshot.val(), use this syntax to get songs
  $scope.songs = $firebaseArray(ref);
  console.log("$scope.songs THIS IS AN EXAMPLE", $scope.songs);

  //For proof of concept, this allows you to click the 'find more music' and load a JSON file
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
			console.log("loadedSongs", loadedSongs);
			songFactory.addSongs(loadedSongs.songs);
			$scope.songs = songFactory.getSongs();
			console.log("scope.songs", $scope.songs);
		}, function(error) {
				console.log("error");
			}
		);
	}; // END loadMore Function


	//Clears fields
	$scope.resetList = function() {
		$scope.filterArtist = "";
		$scope.filterAlbum = "";
	}; // END resetList Function

	//At the moment you have to click a button to display art
	//I want to return to it being automatically done on whatever the first song is
	$scope.displayArt = function(song) {
		console.log("Album Art URL", song.art);
		if (song.art) {
			$scope.albumArt = song.art;
		} else {
			$scope.albumArt = "images/yourArtHere.jpg";
		}
	}; // END displayArt Function

	$scope.search = {};

	//Genre filter
  $scope.searchBy = function () {
    return function (songity) {
      if ( $scope.search[songity.genre] === true ) {
        return true;
      }
    }
  };


}]);