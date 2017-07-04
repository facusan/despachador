// public/core.js

var despacho = angular.module('despacho', []);

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.ambulancias;
    $scope.resultado;

    // when landing on the page
    $http.get('/api/ambulancias')
        .success(function(data) {
            $scope.ambulancias = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.runRules = function() {
        console.log($scope.formData);
        $http.post('/api/rules', $scope.formData)
            .success(function(data) {   
                $scope.resultado = data.nombre;
               // $scope.formData = {}; // clear the form so our user is ready to enter another
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}