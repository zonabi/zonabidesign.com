angular.module('components', [])
	.directive('molDraw', function(){
		return {
			restrict: 'E',
			scope:{
				//name:'@'
			},
			templateUrl: 'partials/moldrawview.html',
			controller: function($scope, $attrs){

				$scope.currentTool = 'atom';
				$scope.atomSel = true;
				$scope.totalAtoms = 0;
				$scope.totalBonds = 0;
				$scope.totalRings = 0;

				$scope.isDrawingBond = false;
				$scope.isDrawingRing = false;

				$scope.canvas = document.getElementById('moldrawcanvas');
				$scope.stage = new createjs.Stage($scope.canvas);
				$scope.mouseX = 0;
				$scope.mouseY = 0;
				$scope.startX = null;
				$scope.startY = null;
				$scope.endX = 0;
				$scope.endY = 0;



				$scope.mouseDownAction = function(event){
					switch($scope.currentTool){
						case "atom":
							$scope.drawAtom(event);
							break;
						case "bond":
							$scope.startBond(event);
							break;
						case "ring":
							$scope.drawRing(event);
							break;
						case "erase":
							$scope.eraseClick(event);
							break;
						default:
							$scope.drawAtom(event);
					}
				},

				$scope.mouseUpAction = function(event){
					switch($scope.currentTool){
						case "atom":
							//$scope.drawAtom(event);
							break;
						case "bond":
							$scope.endBond(event);
							break;
						case "ring":
							//$scope.drawRing(event);
							break;
						case "erase":
							//$scope.eraseClick(event);
							break;
						default:
							//$scope.drawAtom(event);
					}
				},
				$scope.mouseMoveAction = function(){
					//console.log("mousemove");
					switch($scope.currentTool){
						case "atom":
							//$scope.drawAtom(event);
							break;
						case "bond":
							$scope.ghostBond(event);
							break;
						case "ring":
							$scope.isDrawingRing = true;
							$scope.drawGhostRing(event);
							break;
						case "erase":
							//$scope.eraseClick(event);
							break;
						default:
							//$scope.drawAtom(event);
					}
				}

				$scope.drawAtom = function(event){
					//console.log("drawAtom");
					$scope.mouseX = event.offsetX;
					$scope.mouseY = event.offsetY;
					$scope.drawCircle($scope.mouseX, $scope.mouseY);
				},

				$scope.drawCircle = function(x, y){
					$scope.shape = new createjs.Shape();
					$scope.shape.graphics.beginStroke('rgba(50,50,50,1)').beginFill('rgba(200,200,250,1)').drawCircle(x, y, 7);
					$scope.stage.addChild($scope.shape);
					$scope.stage.update();
					$scope.totalAtoms++;
				}

				$scope.startBond = function(event){
					//console.log("startBond");
					$scope.startX = event.offsetX;
					$scope.startY = event.offsetY;
					$scope.isDrawingBond = true;


				},
				$scope.endBond = function(event){
					//console.log("endBond");
					$scope.endX = event.offsetX;
					$scope.endY = event.offsetY;
					$scope.isDrawingBond = false;
					$scope.drawAtom
					$scope.totalBonds++;

					drawLine($scope.startX, $scope.startY, $scope.endX, $scope.endY, "black");
					$scope.drawCircle($scope.startX, $scope.startY);
					$scope.drawCircle($scope.endX, $scope.endY);

				},
				$scope.ghostBond = function(event){
					//console.log("ghostBond");
					$scope.endX = event.offsetX;
					$scope.endY = event.offsetY;

					if($scope.isDrawingBond==true){
						
						drawLine($scope.startX, $scope.startY, $scope.endX, $scope.endY, "gray");
						$scope.lineshape.graphics.clear();
					}
					
				},
				$scope.drawRing = function(event){
					$scope.mouseX = event.offsetX;
					$scope.mouseY = event.offsetY;

					$scope.ringshape = new createjs.Shape();
					$scope.ringshape.graphics.setStrokeStyle(1);
					$scope.ringshape.graphics.beginStroke("black");
					$scope.ringshape.graphics.moveTo($scope.mouseX, $scope.mouseY);
					$scope.ringshape.graphics.drawPolyStar( $scope.mouseX,  $scope.mouseY,  30, 5, 0, -90 );
					$scope.stage.addChild($scope.ringshape);
					$scope.stage.update();

					$scope.totalRings++;
				},
				$scope.drawGhostRing = function(event){
					$scope.mouseX = event.offsetX;
					$scope.mouseY = event.offsetY;

					if($scope.isDrawingRing == true){
						$scope.ringshape = new createjs.Shape();
						$scope.ringshape.graphics.setStrokeStyle(1);
						$scope.ringshape.graphics.beginStroke("gray");
						$scope.ringshape.graphics.moveTo($scope.mouseX, $scope.mouseY);
						$scope.ringshape.graphics.drawPolyStar( $scope.mouseX,  $scope.mouseY,  30, 5, 0, -90 );
						$scope.stage.addChild($scope.ringshape);
						$scope.stage.update();
						$scope.ringshape.graphics.clear();
					}
					
				},
				$scope.switchTool = function($tool){
					//console.log("switchTool");
					$scope.currentTool = $tool;
				},
				$scope.isToolSelected = function($tool){
					if($scope.currentTool == $tool){
						return true;
					} else {
						return false;
					}
				},
				$scope.getTotalAtoms = function(){
					//console.log("getTotalAtoms");
					return $scope.totalAtoms;
				},
				$scope.getTotalBonds = function(){
					return $scope.totalBonds;
				},
				$scope.getTotalRings = function(){
					return $scope.totalRings;
				},
				drawLine = function(startX, startY, endX, endY, style){
					console.log("drawline");
					$scope.lineshape = new createjs.Shape();
					$scope.lineshape.graphics.setStrokeStyle(1);
					$scope.lineshape.graphics.beginStroke(style);
					$scope.lineshape.graphics.moveTo(startX, startY);
					$scope.lineshape.graphics.lineTo(endX, endY);
					$scope.stage.addChild($scope.lineshape);
					$scope.stage.update();
				},
				$scope.createGrid = function($gridspacing, $stagewidth, $stageheight){
					console.log("createGrid");
					$scope.spacing = $gridspacing;
					var iterateX = $stagewidth/$gridspacing;
					var iterateY = $stageheight/$gridspacing;

					for (var i = 0; i < iterateX; i++) {
						drawLine(i*$gridspacing, 0, i*$gridspacing, $stageheight, "#CCC" );
					}
					for (var j = 0; j < iterateY; j++) {
						drawLine(0, j*$gridspacing, $stagewidth, j*$gridspacing, "#CCC" );
					}
				},

				$scope.createGrid(25, 600, 400);
			}
		};
	}),



angular.module('SaplingHomework', ['components']);