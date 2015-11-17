var movieApp = angular.module('movieApi', ['ngRoute']);

movieApp.config(function($routeProvider, $httpProvider){
	
	$routeProvider
		.when('/home',{
			templateUrl: 'js/home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.when('/search', {
			templateUrl: 'js/search/searchTmpl.html',
			controller: 'searchCtrl'
		})
		.when('/details', {
			templateUrl: 'js/details/detailsTmpl.html',
			controller: 'detailsCtrl'
		})
		.otherwise(
			'/home'
		)
});


