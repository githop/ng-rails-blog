'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:EditpostCtrl
 * @description
 * # EditpostCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('EditPostCtrl', ['$scope', '$routeParams', '$location', 'postFactory',
  	function ($scope, $routeParams, $location, postFactory) {
  		
 		$scope.post = {title: '', contents: '<img src="../images/ajax-loader.gif" />'};

			function prepEdit(id) {
				postFactory.postGet(id)
					.success(function(data) {
						$scope.post = data;
					});
			}

			prepEdit($routeParams.id);

	 		$scope.editPost = function(post) {
	 			postFactory.postEdit(post)
	 				.success(function() {
	 					$location.url('/posts/' + $routeParams.id); 
	 				})
	 				.error(function(error){
	 					console.log('whoops ' + error.message);
	 				}); 
 			}; 
  }]);
