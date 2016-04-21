angular.module('app/restaurants/restaurant-list', [
  'common/rating/rating-filter',
  'common/rating/rating-component'
])

.component('fmRestaurantList', {
  templateUrl: 'src/app/restaurants/restaurant-list.template.html',
  controller: FmRestaurantList
});

function FmRestaurantList($http, $rootScope) {
  this.$http = $http;
  this.$rootScope = $rootScope;
  this.sortProperty = 'name';
  this.sortDirection = false;
  this.filters = {
    price: null,
    rating: null
  };
}

FmRestaurantList.prototype.$onInit = function() {
  var _this = this;
  var url = 'assets/data/restaurants.json';
  this.$http.get(url).then(function(response) {
    _this.restaurants = response.data;
  });

  var filterRestaurants = function() {
    _this.filteredRestaurants = [];
    angular.forEach(_this.restaurants, function(restaurant) {
      if ( ( !_this.filters.rating || restaurant.rating >= _this.filters.rating ) &&
           ( !_this.filters.price || restaurant.price <= _this.filters.price ) ) {
        _this.filteredRestaurants.push(restaurant);
      }
    });
  };

  this.$rootScope.$watchGroup([
      function() { return _this.filters.price; },
      function() { return _this.filters.rating; },
      function() { return _this.restaurants; }
    ], filterRestaurants);
}

FmRestaurantList.prototype.sortBy = function(property) {
  if ( this.sortProperty === property ) {
    this.sortDirection = !this.sortDirection;
  } else {
    this.sortProperty = property;
    this.sortDirection = false;
  }
};

FmRestaurantList.prototype.getSortClass = function(property) {
  if ( this.sortProperty === property ) {
    return 'glyphicon glyphicon-chevron-' + (this.sortDirection ? 'down' : 'up');
  }
};