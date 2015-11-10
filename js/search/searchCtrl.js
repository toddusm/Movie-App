var movieApp = angular.module('movieApi');
movieApp.controller('searchCtrl', function($scope, $location, searchService){

	$scope.details = searchService.getDetails();
	$scope.getTitle = function(data){
		console.log(data.detail.IMDB)
		searchService.getTitle(data.detail.IMDB)
		$location.path('/details')
	}
 $scope.check = function(){
	 console.log(searchService.getMovieDetail());
 }
});

