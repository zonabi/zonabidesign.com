var znbdsite = angular.module('znbdsite', ['ngAnimate']);

function bodyControl ($scope, $location) {
	

	$scope.location = $location;
	$scope.$watch('location.search()', function() {
		$scope.target = ($location.search()).target;
	}, true);

	$scope.changeTarget = function(name){
		$location.search('target', name);
	};

	console.log("bodycontrol location", $scope.location.$$url);

	$scope.currentPage = 'home';

	

	$scope.loadPage = function($page){
		switch($page){
			case 'home':
				loadPageHome();
				break;
			case 'about':
				loadPageAbout();
				break;
			case 'work':
				loadPageWork();
				break;
			case 'exp':
				loadPageExp();
				break;
			case 'social':
				loadPageSocial();
				break;
			case 'contact':
				loadPageContact();
				break;
			default:
				loadPageHome();
		}
		$("body").animate({scrollTop: top}, "slow");
	};

	loadPageHome = function(){
		$scope.currentPage = "home";
		$scope.changeTarget("home");
	};
	loadPageAbout = function(){
		$scope.currentPage = "about";
		$scope.changeTarget("about");
	};
	loadPageWork = function(){
		console.log("loadPageWork");
		$scope.currentPage = "work";
		$scope.changeTarget("work");
	};
	loadPageExp = function(){
		console.log("loadPageExp");
		$scope.currentPage = "exp";
	};
	loadPageSocial = function(){
		console.log("loadPageSoc");
		$scope.currentPage = "social";
	};
	loadPageContact = function(){
		console.log("loadPageContact");
		$scope.currentPage = "contact";
	};

	hideAllPages = function(){

	};

	$scope.urlSplit = $scope.location.$$url.split("=");
	$scope.loadPage($scope.urlSplit[1]);
}