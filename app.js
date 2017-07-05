(function () {
  'use strict';
  angular.module('myFirstApp', [])
  .controller('myFirstController', sqacub);

  sqacub.$inject = ["$scope"];
  function sqacub($scope){
    $scope.bass = 'whythis';
    $scope.squarer = function(n) {return n*n};
    $scope.cuber = function(x){
      var solution = $scope.squarer(x);
      return solution*x;
    };
  }
})();
