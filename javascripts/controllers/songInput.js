app.controller("NewSongInput", ["$q", "$http", "$scope", "$firebaseArray", "$location",
	function($q, $http, $scope, $firebaseArray, $location) {

	$scope.newSong = {};

	var addRef = new Firebase("https://mistory.firebaseio.com/user/playlist1/songs");
  $scope.songs = $firebaseArray(addRef);

  //Currently adds song to the default playlist, in the future will allow playlist choices
	$scope.clickAddSong = function() {
		$scope.songs.$add($scope.newSong);
		$location.path("/songs/list");
	};

}]);