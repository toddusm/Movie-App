var movieApp = angular.module('movieApi');

movieApp.directive('returnHome', function(){
	return {
		template: '<div class="right-align"><a href="#/"><button class="blue lighten-5">Home</button></a></div>'
	};
})