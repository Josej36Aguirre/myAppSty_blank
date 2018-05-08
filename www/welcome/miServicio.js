var app = angular.module('starter');
app.service('miServicio', function($resource) {
	// body...
	this.obtenersDatos = function() {
		// esta se va encargar del servicio de obtener una api 
		return $resource("https://randomuser.me/api/?results=10").get();
	}
});