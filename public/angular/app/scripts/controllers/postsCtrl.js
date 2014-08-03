'use strict';

angular.module('angularApp')
.controller('PostsCtrl', ['$scope', '$location', 'postFactory', 
 function ($scope, $location,  postFactory) {

  function getPosts () {
    postFactory.allPosts()
    .success(function(data) {
      $scope.posts = data;
    })
    .error(function(error) {
      console.log('Whoops ' + error.message); 
    });
  }

 getPosts();

 $scope.viewPost = function(post) {
  $location.url('/posts/' + post.id);
 }; 
  
 $scope.newPost = function() {
  $location.url('/posts/new');
 };


}]);
