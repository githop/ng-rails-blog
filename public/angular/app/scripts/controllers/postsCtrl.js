'use strict';

angular.module('angularApp')
.controller('PostsCtrl', ['$scope', '$location', 'postFactory', 
 function ($scope, $location,  postFactory) {
  $scope.greeting = 'My Blog'; 

  $scope.posts = {title: 'hello', contents: 'contents'}; 

  function getPosts () {
    postFactory.allPosts()
    .success(function(data) {
      $scope.posts = data;
    })
    .error(function(error) {
      $scope.status = 'Whoops ' + error.message; 
    });
  }

 getPosts();

 $scope.viewPost = function(post) {
  $location.url('/posts/' + post.id);
 }; 
  
}]);
