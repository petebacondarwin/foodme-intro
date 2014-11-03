angular.module('app', ['ngMessages', 'localStorage'])

.controller('FoodMeController', ['$scope', 'localStorageBinding', '$http', function($scope, localStorageBinding, $http) {

  $scope.$evalAsync('deliveryForm.visible = true');

  $scope.user = localStorageBinding('foodMe/user', {
    name: 'Jo Bloggs',
    address: '123, Some Place, Some Where'
  });

  $scope.showDeliveryForm = function() {
    $scope.deliveryForm.visible = true;
  };

  $scope.hideDeliveryForm = function() {
    $scope.deliveryForm.visible = false;
  };


  // $http.get('https://foodme.firebaseio.com/.json').then(function(response) {
  //   $scope.restaurants = response.data;
  // });

  $http.get('../data/restaurants.json').then(function(response) {
    $scope.restaurants = response.data;
  });

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

  $scope.filters = {
    price: null,
    rating: null
  };


  $scope.$watchGroup(['filters.price', 'filters.rating', 'restaurants'], function filterRestaurants() {
    $scope.filteredRestaurants = [];
    angular.forEach($scope.restaurants, function(restaurant) {
      if ( ( !$scope.filters.rating || restaurant.rating >= $scope.filters.rating ) &&
           ( !$scope.filters.price || restaurant.price <= $scope.filters.price ) )
      {
        $scope.filteredRestaurants.push(restaurant);
      }
    });
  });

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