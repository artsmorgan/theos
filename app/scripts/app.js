'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
var app = angular.module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

angular.element(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dirigente', {
        templateUrl: 'views/dirigente.html',
        controller: 'DirigenteCtrl',
        controllerAs: 'dirigente'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',        
      })
        .when('/admin/temas', {
          templateUrl: 'views/admin/temas.html'
        })
        .when('/admin/ubicaciones', {
          templateUrl: 'views/admin/ubicaciones.html'
        })
        .when('/admin/grupos', {
          templateUrl: 'views/admin/grupos.html'
        })  

      .when('/estudiante', {
        templateUrl: 'views/estudiante.html',
        controller: 'EstudianteCtrl',
        controllerAs: 'estudiante'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
