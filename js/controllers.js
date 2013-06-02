var URL_GET_THESES = 'http://localhost:4000/api/theses';
var URL_GET_THESIS = URL_GET_THESES + '/';

function ThesesController($scope, $http) {
	console.log('ThesesController init.');

	$scope.ellipsize = function(text, length) {
		if(text.length > length) {
			return text.substring(0, length) + String.fromCharCode(8230);
		}
		return text;
	}

	$scope.argumentType = function(argument) {
		return argument.Contra === true ? 'con' : 'pro';
	}

	$http.get(URL_GET_THESES).success(function(data) {
		$scope.theses = data;
	})
	.error(function(data, status, headers, config) {
		console.log('Error in ThesesController: ');
		console.log(data);
		console.log(status);
		console.log(headers);
		console.log(config);
	});

	$scope.addThesis = function() {
		console.log("Sending new thesis...");

		$http.post(URL_GET_THESES, $scope.thesisText).
		success(function(data, status, headers, config) {
			console.log(data);
		}).
		error(function(data, status, headers, config) {
			console.log('Error in ThesesController: ');
			console.log(data);
			console.log(status);
			console.log(headers);
			console.log(config);
		});

	}
}

function ThesisController($scope, $http, $routeParams) {
	console.log('ThesisController init.');

	$scope.thesisId = $routeParams.thesisId;
	
	$http.get(URL_GET_THESIS + $scope.thesisId).success(function(data) {
		$scope.thesis = data;
	})
	.error(function(data, status, headers, config) {
		console.log('Error in ThesisController: ');
		console.log(data);
		console.log(status);
		console.log(headers);
		console.log(config);
	});

}
