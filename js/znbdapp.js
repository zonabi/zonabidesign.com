var znbdsite = angular.module('znbdsite', ['ngAnimate']);

function bodyControl ($scope, $location) {
	
	$scope.location = $location;
	$scope.$watch('location.search()', function() {
		$scope.target = ($location.search()).target;
	}, true);

	$scope.changeTarget = function(name){
		$location.search('target', name);
	};

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
		setTimeout(function(){$('.carousel').carousel();},1000);
	};
	loadPageAbout = function(){
		$scope.currentPage = "about";
		$scope.changeTarget("about");
	};
	loadPageWork = function(){
		$scope.currentPage = "work";
		$scope.changeTarget("work");
	};
	loadPageExp = function(){
		$scope.currentPage = "exp";
		$scope.changeTarget("exp");
	};
	loadPageSocial = function(){
		$scope.currentPage = "social";
		$scope.changeTarget("social");
	};
	loadPageContact = function(){
		$scope.currentPage = "contact";
		$scope.changeTarget("contact");
	};

	hideAllPages = function(){

	};

	$scope.urlSplit = $scope.location.$$url.split("=");
	$scope.loadPage($scope.urlSplit[1]);
}