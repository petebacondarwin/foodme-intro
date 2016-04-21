angular.module('app', [
  'ngMessages',
  'localStorage',
  'app/customer/user-form',
  'app/customer/delivery-info',
  'app/restaurants/restaurant-list'
])

.controller('AppController', function(localStorageBinding, $http) {

  this.deliveryFormVisible = true;

  this.user = localStorageBinding('foodMe/user', {
    name: 'Jo Bloggs',
    address: '123, Some Place, Some Where'
  });

  this.showDeliveryForm = function() {
    this.deliveryFormVisible = true;
  };

  this.hideDeliveryForm = function() {
    this.deliveryFormVisible = false;
  };


  var that = this;
  var url = 'https://foodme.firebaseio.com/.json'; // CORS enabled server
  // var url = '../shared/data/restaurants.json'; // Local webserver

  $http.get(url).then(function(response) {
    that.restaurants = response.data;
  });


  this.sortProperty = 'name';
  this.sortDirection = false;

  this.sortBy = function(property) {
    if ( this.sortProperty === property ) {
      this.sortDirection = !this.sortDirection;
    } else {
      this.sortProperty = property;
      this.sortDirection = false;
    }
  };

  this.getSortClass = function(property) {
    if ( this.sortProperty === property ) {
      return 'glyphicon glyphicon-chevron-' + (this.sortDirection ? 'down' : 'up');
    }
  };

})


.filter('rating', function() {
  return function(value, symbol) {
    var output = "";
    while(value>0) {
      output += symbol;
      value -= 1;
    }
    return output;
  };
});