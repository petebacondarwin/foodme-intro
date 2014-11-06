# Step 10

List of restaurants loaded from a REST service

Filter the restaurants by price and rating:

* Add a new form to the left of the restaurant list

```html
<div class="col-md-3">
  <form role="form" class="well" name="filterForm">
    <legend>Filter Restaurants</legend>
    <div class="form-group">
      <label for="priceFilter" class="control-label">Price (no more than)</label>
      <input type="number" id="priceFilter" name="priceFilter" class="form-control" ng-model="filters.price">
    </div>
    <div class="form-group">
      <label for="ratingFilter" class="control-label">Rating (at least)</label>
      <input type="number" id="ratingFilter" name="ratingFilter" class="form-control" ng-model="filters.rating">
    </div>
  </form>
</div>
```

* Initialize the filters to null

```js
$scope.filters = {
  price: null,
  rating: null
};
```

* Watch the price and rating values and filter the restaurant list accordingly

```js
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
```js

* Change the `ng-repeat` directive to use the `filteredRestaurants`

```html
<tr ng-repeat="restaurant in filteredRestaurants | orderBy : sortProperty : sortDirection">
```