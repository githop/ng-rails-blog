	'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:PostctrlCtrl
 * @description
 * # PostctrlCtrl
 * Controller of the angularApp
 */
 angular.module('angularApp')
 .controller('PostCtrl', ['$scope', '$routeParams', 'postFactory', 
 	function ($scope, $routeParams, postFactory) {
 		$scope.post = {title: 'loading..', contents: ''};

 		function getPost(id) {
 			postFactory.postGet(id)
 			.success(function(data){
 				$scope.post = data; 
 			});
 		}

 		getPost($routeParams.id);

 	}]);
