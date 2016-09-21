var alertsModule = angular.module("alertsModule", []);
var userDetailModule = angular.module("userDetailModule", []);
var famDetailModule = angular.module("famDetailModule", []);
var custContactModule = angular.module("custContactModule", []);
var homeModule = angular.module("homeModule", ['alertsModule', 'userDetailModule', 'famDetailModule', 'custContactModule']);
var csrApp = angular.module('csrApp', ['ngRoute', 'homeModule', 'alertsModule']);

// configure our routes
csrApp.config(function($routeProvider, $httpProvider) {
  $routeProvider
    // route for the home page
    .when('/', {
      templateUrl : 'partials/home.html',
      controller  : 'homeCtrl'
    })
    .when('/index', {
      templateUrl : 'partials/home.html',
      controller  : 'homeCtrl'
    });
});
