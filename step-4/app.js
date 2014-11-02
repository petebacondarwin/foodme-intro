angular.module('app', [])

.controller('FoodMeController', ['$scope', function($scope) {

  $scope.deliveryForm = {
    visible: true
  };

  $scope.user = {
    name: 'Jo Bloggs',
    address: '123, Some Place, Some Where'
  };

  $scope.showDeliveryForm = function() {
    $scope.deliveryForm.visible = true;
  };

  $scope.hideDeliveryForm = function() {
    $scope.deliveryForm.visible = false;
  };

}]);