# Step 10

List of restaurants loaded from a REST service

Filter the restaurants by price and rating:

* Add a new form to the left of the restaurant list

```html
<div class="col-md-3">
  <form role="form" class="well" name="app.filterForm">
    <legend>Filter Restaurants</legend>
    <div class="form-group">
      <label for="priceFilter" class="control-label">Price (no more than)</label>
      <input type="number" id="priceFilter" name="priceFilter" class="form-control" ng-model="app.filters.price">
    </div>
    <div class="form-group">
      <label for="ratingFilter" class="control-label">Rating (at least)</label>
      <input type="number" id="ratingFilter" name="ratingFilter" class="form-control" ng-model="app.filters.rating">
    </div>
  </form>
</div>
```

* Initialize the filters to null in the controller

```js
this.filters = {
  price: null,
  rating: null
};
```

* Watch the price and rating values and filter the restaurant list accordingly



```js
var filterRestaurants = function() {
  that.filteredRestaurants = [];
  angular.forEach(that.restaurants, function(restaurant) {
    if ( ( !that.filters.rating || restaurant.rating >= that.filters.rating ) &&
         ( !that.filters.price || restaurant.price <= that.filters.price ) ) {
      that.filteredRestaurants.push(restaurant);
    }
  }
}

$rootScope.$watchGroup([
    function() { return that.filters.price; },
    function() { return that.filters.rating; },
    function() { return that.restaurants; }
  ], filterRestaurants);
```js

* Change the `ng-repeat` directive to use the `filteredRestaurants`

```html
<tr ng-repeat="restaurant in app.filteredRestaurants | orderBy : app.sortProperty : app.sortDirection">
```