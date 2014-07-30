'use strict';

angular.module('angularApp')
  .controller('PostsCtrl', ['$scope', 'Post', 
  	function ($scope, Post) {
  		$scope.greeting = 'My Blog'; 

  		$scope.posts = Post.query();

  		$scope.create = function() {
  			Post.save($scope.newPost, function(resource) {
  				$scope.posts.push(resource);
  				$scope.newPost = {};
  			}, function(response) {
  				console.log('Error ' + response.status);
  			});
  		};
  }]);
