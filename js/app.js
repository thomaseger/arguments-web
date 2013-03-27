var argumentsApp = angular.module('arguments', []).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/theses', {templateUrl: 'partials/theses.html', controller: ThesesController})
		.when('/theses/:thesisId', {templateUrl: 'partials/thesis.html', controller: ThesisController})
		.otherwise({redirectTo: '/theses'});
}]);

argumentsApp.config(['$httpProvider', function($httpProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);