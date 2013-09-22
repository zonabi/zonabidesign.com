var znbdsite = angular.module('znbdsite', ['ngAnimate']);

function bodyControl ($scope) {
	console.log("bodycontrol");



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
	}

	loadPageHome = function(){
		$scope.currentPage = "home";
	}
	loadPageAbout = function(){
		$scope.currentPage = "about";
	}
	loadPageWork = function(){
		console.log("loadPageWork");
		$scope.currentPage = "work";
	}
	loadPageExp = function(){
		console.log("loadPageExp");
		$scope.currentPage = "exp";
	}
	loadPageSocial = function(){
		console.log("loadPageSoc");
		$scope.currentPage = "social";
	}
	loadPageContact = function(){
		console.log("loadPageContact");
		$scope.currentPage = "contact";
	}

	hideAllPages = function(){

	}



}