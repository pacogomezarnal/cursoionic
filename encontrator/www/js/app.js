//Módulo prinipal
var app=angular.module('encontrator', ['ionic'])
//Controlador y datos de la aplicación
app.controller('encontratorCtr',function($scope){
  $scope.mensaje="Hola juan";
  $scope.entradas=[
    {
      titulo:'Paco programa',
      subtitulo:'html, js'
    },
    {
      titulo:'Lenguajes multiplataforma',
      subtitulo:'java,c++'
    }
  ];
});
//Inicio de la aplicacion
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
