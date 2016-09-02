//Este es el modulo creado para la vista
var acumuladorApp = angular.module('acumuladorApp', []);
//Este es el controlador que realiza las acciones y almacena los datos
acumuladorApp.controller("acumuladorAppCtrl",function($scope){
  $scope.total = 0;
  $scope.cuanto = 0;

  $scope.sumar = function(){
    $scope.total += parseInt($scope.cuanto);
  }
  $scope.restar = function(){
    $scope.total -= parseInt($scope.cuanto);
  }
});
