
//Instancia de angular
var app = angular.module('tarea1',[]);


//Se crea un controlador con su funcion callback
app.controller('nombreControlador', funcionControlador);


//Se definen todos aquellos elemtentos que seran utilizados por el nodo del DOM que
//tenga la instancia de este controlador
function funcionControlador($scope){

	$scope.users	=	
	[
		{
				nombre:	'Juan',	
				apellido:	'Nieves',	
				imagen:	'https://pbs.twimg.com/profile_images/613894506480439296/MGWBzW3B.jpg',
				vivo:	true
		},
		{
				nombre:	'Daenerys',	
				apellido:	'Targaryen',	
				imagen:	'https://pbs.twimg.com/profile_images/699219278927675393/de5Cjrju.png',
				vivo:	false
		},
		{
				nombre:	'Eddard',	
				apellido:	'Stark',	
				imagen:	'https://pbs.twimg.com/profile_images/623606708531818496/8ap1ZAb6.jpg',
				vivo:	true
		}
	];


	$scope.nuevoUsuario = {nombre: '', apellido: '', imagen: '', vivo: true};

	$scope.agregarUsuario = function(){
		$scope.users.push(this.nuevoUsuario);
		$scope.nuevoUsuario = {nombre: '', apellido: '', imagen: '', vivo: true};

		//ESTO ES UN COMANDO JQUERY PERO ANGULARJS ESTA CONSTRUIDO SOBRE UNA INSTANCIA DE ESTA LIBRERIA
		//POR LO QUE SE PUEDEN OCUPAR DE MANERA NATIVA
		$('#agregarPersonaje').modal('hide');
	};



}

