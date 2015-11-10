var movieApp = angular.module('movieApi');

movieApp.directive('returnHome', function(){
	return {
		template: '<div><a href="#/"><button>Home</button></a></div>'
	};
})