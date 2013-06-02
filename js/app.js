var argumentsApp = angular.module('arguments', []).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/theses', {templateUrl: 'partials/theses.html', controller: ThesesController})
		.when('/theses/:thesisId', {templateUrl: 'partials/thesis.html', controller: ThesisController})
		.otherwise({redirectTo: '/theses'});
}]);

argumentsApp.config(['$httpProvider', '$compileProvider', function($httpProvider, $compileProvider) {
	$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    
    delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);