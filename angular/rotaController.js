var myApp = angular.module('myApp',['ngRoute', 'ui.router'])

.controller('rotaController', function($scope, $route, $routeParams, $location){
$scope.username = "Vinicius Oliveira";
$scope.$route = $route;
$scope.$location = $location;
$scope.$routeParams = $routeParams;
})

.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(false);
    $routeProvider
    .when('/', {
        templateUrl : 'pages/home.php',
    })
    .when('/cadastro_produto', {
        templateUrl : 'pages/crudProduct.php'
    })
    .when('/ConsultaEstoque', {
        templateUrl : 'consultaEstoque.php'
    })
    .otherwise({
        redirectTo: '/'
    });
  

});

