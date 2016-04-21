angular.module('app/restaurants/restaurant-list', [
  'common/rating/rating-filter'
])

.component('fmRestaurantList', {
  templateUrl: 'src/app/restaurants/restaurant-list.template.html',
  controller: FmRestaurantList
});

function FmRestaurantList($http) {
  this.$http = $http;
  this.sortProperty = 'name';
  this.sortDirection = false;
}

FmRestaurantList.prototype.$onInit = function() {
  var _this = this;
  var url = 'assets/data/restaurants.json';
  this.$http.get(url).then(function(response) {
    _this.restaurants = response.data;
  });
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