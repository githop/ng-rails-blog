'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:NewpostCtrl
 * @description
 * # NewpostCtrl
 * Controller of the angularApp
 */
 angular.module('angularApp')
 .controller('NewPostCtrl', ['$scope', '$location', 'postFactory',  
 	function ($scope, $location, postFactory) {

 		$scope.post = {title: '', contents: ''};

 		$scope.createPost = function(post) {

 			postFactory.newPost(post)
 			.success(function() {

 				$scope.post = post; 
				$location.url('/'); 
								 				
 			});
 		};




 	}]);
