angular.module('components', [])
	.directive('saplingApp', function(){
		return {
			restrict: 'E',
			scope:{
				name:'@'
			},
			templateUrl: 'partials/assignmentview.html'
		};
	}),


angular.module('SaplingHomework', ['components']);