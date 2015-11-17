var movieApp = angular.module('movieApi');
movieApp.controller('homeCtrl', function($scope, $location, searchService){

	$scope.getMovie = function(){
		searchService.getMovie($scope.search).then(function(searchResults){
			console.log(333, searchResults);
			$location.path('/search')
		})
	}
});