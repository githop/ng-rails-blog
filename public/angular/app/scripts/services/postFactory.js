'use strict';

/**
 * @ngdoc service
 * @name angularApp.Post
 * @description
 * # Post
 * Service in the angularApp.
 */
angular.module('angularApp')
  .service('postFactory', ['$http', 
  	function($http) {
  		var baseUrl = 'http://localhost:3000/posts';
  		var postFactory = {};

  		postFactory.allPosts = function() {
  			return $http.get(baseUrl); 
  		};

  		postFactory.postGet = function(id) {
  			return $http.get(baseUrl + '/' + id);
  		};

  		postFactory.newPost = function(post) {
  			return $http.post(baseUrl, post);
  		};

      postFactory.postDelete = function(id){
        return $http.delete(baseUrl + '/' + id); 
      };

  		return postFactory;
  }]);
