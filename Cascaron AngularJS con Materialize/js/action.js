
//Instancia de angular
var app = angular.module('tarea1',[]);


//Se crea un controlador con su funcion callback
app.controller('nombreControlador', funcionControlador);


//Se definen todos aquellos elemtentos que seran utilizados por el nodo del DOM que
//tenga la instancia de este controlador
function funcionControlador($scope){
 	$(".button-collapse").sideNav();
	};



}

