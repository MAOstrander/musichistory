app.controller("NewSongInput", ["$q", "$http", "$scope", "simple-songs",
	function($q, $http, $scope, songFactory) {

	$scope.newSong = {};

	$scope.clickAddSong = function() {
		songFactory.addSong($scope.newSong);
	}

}]);