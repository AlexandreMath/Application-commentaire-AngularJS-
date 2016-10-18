var appli = angular.module('MonApp', ['ngRoute']);
//Configuration des routes en angularJS
appli.config( function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: 'partials/home.html', controller : 'PostsCtrl'})
  .when('/comments/:id', {templateUrl: 'partials/comments.html', controller : 'commentsCtrl'})
  .otherwise({redirectTo : '/'});
});
