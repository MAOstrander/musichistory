var app = angular.module("MusicHistory", ["firebase", "ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'MusicControl'
      })
      .when('/songs/add', {
        templateUrl: 'partials/add-song.html',
        controller: 'NewSongInput'
      })
      .when('/songs/details/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailControl'
      })
      .otherwise('/songs/list');
}]);
