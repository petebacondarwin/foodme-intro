angular.module('app', ['ngMessages'])

.controller('FoodMeController', ['$scope', function($scope) {

  $scope.$evalAsync('deliveryForm.visible = true');

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
      "cuisine": "german",
      "opens": "11:30:00",
      "closes": "22:30:00",
      "location": "22 Teutonic Ave.",
      "description": "German home-cooked meals and fifty-eight different beers on tap. To get more authentic, you'd need to be wearing lederhosen."
    },
    {
      "price": 4,
      "rating": 5,
      "id": "robatayaki",
      "name": "Robatayaki Hachi",
      "cuisine": "japanese",
      "opens": "17:30:00",
      "closes": "23:30:00",
      "location": "8 Hawthorne Ln.",
      "description": "Japanese food the way you like it. Fast, fresh, grilled."
    },
    {
      "price": 5,
      "rating": 4,
      "id": "bateaurouge",
      "name": "Le Bateau Rouge",
      "cuisine": "french",
      "opens": "17:00:00",
      "closes": "23:30:00",
      "location": "2 South Park Dr.",
      "description": "Fine French dining in a romantic setting. From soupe à l'oignon to coq au vin, let our chef delight you with a local take on authentic favorites."
    }
  ];


  $scope.sortProperty = 'name';
  $scope.sortDirection = false;

  $scope.sortBy = function(property) {
    if ( $scope.sortProperty === property ) {
      $scope.sortDirection = !$scope.sortDirection;
    } else {
      $scope.sortProperty = property;
      $scope.sortDirection = false;
    }
  };

  $scope.getSortClass = function(property) {
    if ( $scope.sortProperty === property ) {
      return 'glyphicon glyphicon-chevron-' + ($scope.sortDirection ? 'down' : 'up');
    }
  };

}])


.filter('rating', ['$sce', function($sce) {
  return function(value, glyph) {
    var output = "";
    while(value>0) {
      output += '<span class="glyphicon glyphicon-' + glyph + '"></span>';
      value -= 1;
    }
    return $sce.trustAsHtml(output);
  };
}]);