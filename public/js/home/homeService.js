// var movieApp = angular.module('movieApi');

// 	movieApp.service('homeService', function($http){
// 	var movieUrl = "http://www.omdbapi.com/?s="
// 	this.getMovie = function(search){
// 		return $http({
// 			method: 'GET',
// 			url: movieUrl + search
// 		}).then(function(response){
// 			var searchResult = response.data.Search;
// 			console.log(11111, searchResult);
// 			var searchResults = [];
// 			for(var i = 0; i < searchResult.length; i++)
// 				searchResults.push({
// 					Title: searchResult[i].Title,
// 					Year: searchResult[i].Year,
// 					IMDB: searchResult[i].imdbID,
// 					Poster: searchResult[i].Poster
// 				})
// 				console.log(22222, searchResults);
// 				return searchResults;
// 		})
		
// 	}
// 	});