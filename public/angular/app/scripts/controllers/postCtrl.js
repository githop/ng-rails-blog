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
 		$scope.post = {title: '', contents: '<img src="../images/ajax-loader.gif" />'};

 		function getPost(id) {
 			postFactory.postGet(id)
 			.success(function(data){
 				$scope.post = data;
 			})
 			.error(function(error){
 				console.log('error message: ' + error.message);
 			});
 		}

 		getPost($routeParams.id);

    $scope.deletePost = function(post) {
      postFactory.postDelete(post.id)
      .success(function() {
       $location.url('/');
     })
      .error(function(error){
       console.log('error message: ' + error.message); 
     });
    }; 		

    $scope.editPost = function(){
      $location.url('/posts/' + $routeParams.id + '/edit');
    };    

  }]);
