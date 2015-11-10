var movieApp = angular.module('movieApi');
movieApp.controller('detailsCtrl', function($scope, $location, searchService){

	$scope.movieInfo = searchService.getMovieDetail();
});