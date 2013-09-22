function bodyControl ($scope){
	console.log("bodycontrol");
	var scene = document.getElementById('body');
	var parallax = new Parallax(scene, {
		calibrateX: false,
		calibrateY: true,
		invertX: false,
		invertY: true,
		limitX: false,
		limitY: 10,
		scalarX: 2,
		scalarY: 8,
		frictionX: 0.2,
		frictionY: 0.8
	});

	$scope.currentPage = 'home';

	$scope.loadPage = function($page){
		switch($page){
			case home:
				loadPageHome();
				break;
			case work:
				loadPageWork();
				break;
			case exp:
				loadPageExp();
				break;
			case social:
				loadPageSocial();
				break;
			case contact:
				loadPageContact();
				break;
			default:
				loadPageHome();
		}
	}

	loadPageHome = function(){
		currentPage = "home";
	}
	loadPageWork = function(){
		console.log("loadPageWork");
		currentPage = "work";
	}

	hideAllPages = function(){

	}
}
