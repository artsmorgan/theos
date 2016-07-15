'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
app.controller('MainCtrl', function ($scope, $location) {
    
    $scope.login = function($event){
    	var path = '/admin';
    	$location.path(path);
    }

  });
