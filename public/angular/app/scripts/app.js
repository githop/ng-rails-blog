'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
 angular
 .module('angularApp', [
  'ngResource',
  'ngRoute',
  'ngTouch'
  ])
 .config(['$routeProvider', 
  function ($routeProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/postIndex.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/new', {
        templateUrl: 'views/postNew.html',
        controller: 'NewPostCtrl'
      })
      .when('/posts/:id', {
        templateUrl: 'views/postShow.html',
        controller: 'PostCtrl'
      })
      .otherwise('/'); 

  }]);
