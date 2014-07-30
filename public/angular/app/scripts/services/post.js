'use strict';

/**
 * @ngdoc service
 * @name angularApp.Post
 * @description
 * # Post
 * Service in the angularApp.
 */
angular.module('angularApp')
  .service('Post', ['$resource', 
  	function Post($resource) {
  		return $resource('http://localhost\\:3000/posts/');
  }]);
