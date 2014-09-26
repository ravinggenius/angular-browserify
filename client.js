var angular = require('angular');

var app = angular.module('fooTest', [
	require('angular-ui-router')
]);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/top');

	$stateProvider.state('top', {
		url: '^/top',
		controller: 'TopController',
		template: '<div>foo: {{foo}}</div>'
	});
});

app.controller('TopController', function ($scope, $state) {
	$scope.foo = 'hello person';
});
