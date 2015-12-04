app.controller("NewSongInput", ["$q", "$http", "$scope", "$firebaseArray",
	function($q, $http, $scope, $firebaseArray) {

	$scope.newSong = {};

	var addRef = new Firebase("https://mistory.firebaseio.com/user/playlist1/songs");

	// Instead of snapshot.val(), use this syntax to get songs
  	$scope.songs = $firebaseArray(addRef);

	$scope.clickAddSong = function() {
		$scope.songs.$add($scope.newSong);
	}

}]);