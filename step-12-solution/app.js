angular.module('app', ['ngMessages', 'ngMessageFormat', 'localStorage', 'rating'])

.controller('AppController', function(localStorageBinding, $http, $rootScope) {

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

  this.filters = {
    price: null,
    rating: null
  };

  var filterRestaurants = function() {
    that.filteredRestaurants = [];
    angular.forEach(that.restaurants, function(restaurant) {
      if ( ( !that.filters.rating || restaurant.rating >= that.filters.rating ) &&
           ( !that.filters.price || restaurant.price <= that.filters.price ) ) {
        that.filteredRestaurants.push(restaurant);
      }
    });
  };

  $rootScope.$watchGroup([
      function() { return that.filters.price; },
      function() { return that.filters.rating; },
      function() { return that.restaurants; }
    ], filterRestaurants);
})


.filter('rating', function($sce) {
  return function(value, glyph) {
    var output = "";
    while(value>0) {
      output += '<span class="glyphicon glyphicon-' + glyph + '"></span>';
      value -= 1;
    }
    return $sce.trustAsHtml(output);
  };
});