var movieApp = angular.module('movieApi');

	movieApp.service('searchService', function($http){
	var movieUrl = "http://www.omdbapi.com/?s="
	var searchResults = [];
	var movieDetails = {}
	this.getMovie = function(search){
		return $http({
			method: 'GET',
			url: movieUrl + search
		}).then(function(response){
			var searchResult = response.data.Search;
			console.log(11111, searchResult);
			for(var i = 0; i < searchResult.length; i++)
				searchResults.push({
					Title: searchResult[i].Title,
					Year: searchResult[i].Year,
					IMDB: searchResult[i].imdbID,
					Poster: searchResult[i].Poster
				})
				console.log(22222, searchResults);
				return searchResults;
		})
	}
	
	this.getDetails = function(){
		return searchResults;
	}
	
  	this.getTitle = function(detail){
		console.log("getTitle ran");
		return $http({
			method: 'GET',
			url: 'http://www.omdbapi.com/?i=' + detail
		}).then(function(movieInfo){
			console.log(movieInfo);
			movieDetails.Actors = movieInfo.data.Actors,
			movieDetails.Awards = movieInfo.data.Awards,
			movieDetails.Director = movieInfo.data.Director,
			movieDetails.Genre = movieInfo.data.Genre,
			movieDetails.Plot = movieInfo.data.Plot,
			movieDetails.Poster = movieInfo.data.Poster,
			movieDetails.Rated = movieInfo.data.Rated,
			movieDetails.Released = movieInfo.data.Released,
			movieDetails.Runtime = movieInfo.data.Runtime,
			movieDetails.Title = movieInfo.data.Title,
			movieDetails.Writer = movieInfo.data.Writer
		})
	}
	
	this.getMovieDetail = function(){
		return movieDetails;
	}
	
	
	});