angular.module('starter').controller('welcomeCtrl' ,['$scope', 'miConfiguracion','Titulo_obra','miServicio', function($scope, miConfiguracion, Titulo_obra, miServicio){
	$scope.welcome ="Bienvenida al Sena";
	console.log(miConfiguracion);
	console.log(Titulo_obra);
	console.log(miServicio);
}]);
	