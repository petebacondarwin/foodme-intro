angular.module('app', ['ngMessages'])

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


  $scope.restaurants = [
    {
      "price": 3,
      "rating": 3,
      "id": "esthers",
      "name": "Esther's German Saloon",
      "description": "German home-cooked meals and fifty-eight different beers on tap. To get more authentic, you'd need to be wearing lederhosen."
    },
    {
      "price": 4,
      "rating": 5,
      "id": "robatayaki",
      "name": "Robatayaki Hachi",
      "description": "Japanese food the way you like it. Fast, fresh, grilled."
    },
    {
      "price": 5,
      "rating": 4,
      "id": "bateaurouge",
      "name": "Le Bateau Rouge",
      "description": "Fine French dining in a romantic setting. From soupe à l'oignon to coq au vin, let our chef delight you with a local take on authentic favorites."
    }
  ];

  $scope.sortProperty = 'price';
  $scope.sortDirection = false;

  $scope.getSortClass = function(prop) {
    if ( $scope.sortProperty === prop ) {
      return 'glyphicon glyphicon-chevron-' +
         ($scope.sortDirection ? 'down'  : 'up');
    }
  };

  $scope.sortBy = function(prop) {
    if ( $scope.sortProperty === prop ) {
      $scope.sortDirection = !$scope.sortDirection;
    } else {
      $scope.sortProperty = prop;
      $scope.sortDirection = false;
    }
  };

}])

.filter('rating', ['$sce', function ratingFilterFnFactory($sce) {
  return function ratingFilterFn(value, glyph) {
    var output = "";
    while(value>0) {
      output += '<span class="glyphicon glyphicon-' + glyph + '"></span>';
      value -= 1;
    }
    return $sce.trustAsHtml(output);
  };
}]);















