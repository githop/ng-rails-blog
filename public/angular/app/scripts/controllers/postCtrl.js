	'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:PostctrlCtrl
 * @description
 * # PostctrlCtrl
 * Controller of the angularApp
 */
 angular.module('angularApp')
 .controller('PostCtrl', ['$scope', '$routeParams', '$location', 'postFactory', 
 	function ($scope, $routeParams, $location, postFactory) {
 		$scope.post = {title: 'loading..', contents: ''};

 		function getPost(id) {
 			postFactory.postGet(id)
 			.success(function(data){
 				$scope.post = data; 
 			});
 		}

 		getPost($routeParams.id);

		$scope.deletePost = function(post) {
      postFactory.postDelete(post.id)
        .success(function() {
        	$location.url('/');
        });
    }; 		

 	}]);
