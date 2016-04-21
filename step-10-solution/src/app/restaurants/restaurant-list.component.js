angular.module('app/restaurants/restaurant-list', [
  'common/rating/rating-filter'
])

.component('fmRestaurantList', {
  templateUrl: 'src/app/restaurants/restaurant-list.template.html',
  controller: FmRestaurantList
});

function FmRestaurantList() {

  var that = this;
  var url = 'https://foodme.firebaseio.com/.json'; // CORS enabled server
  // var url = '../shared/data/restaurants.json'; // Local webserver

  $http.get(url).then(function(response) {
    that.restaurants = response.data;
  });

  this.sortProperty = 'name';
  this.sortDirection = false;
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