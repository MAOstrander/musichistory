var app = angular.module("MusicHistory", ["ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'MusicControl'
      })
      .when('/add', {
        templateUrl: 'partials/add-song.html',
        controller: 'NewSongInput'
      })
      .otherwise('/list');
}]);
