var app = angular.module('starter');
app.directive('cliente',function(){
//cliente es como se va instanciar la etiqueta o directiva
return{
	templateUrl:'/cliente/cliente.html',
	restic:'AE',//la A hace referencia a atributo y E hace refrencia a etiqueta
	scope:{
		nombre: '='
	}

}

});