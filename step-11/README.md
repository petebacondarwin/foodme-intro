# Step 11

List of restaurants loaded from a RESTful service

Filter the restaurants by price and rating:

* Add a new form to the left of the restaurant list - use `col-md-...` classes to align the columns

```html
  <div class="col-md-3">
    <form role="form" class="well" name="$ctrl.filterForm">
      <legend>Filter Restaurants</legend>
      <div class="form-group">
        <label for="priceFilter" class="control-label">
           Price (no more than)</label>
        <input type="number" id="priceFilter"
               name="priceFilter" class="form-control"
               ng-model="$ctrl.filters.price">
      </div>
      <div class="form-group">
        <label for="ratingFilter" class="control-label">
           Rating (at least)</label>
        <input type="number" id="ratingFilter"
               name="ratingFilter" class="form-control"
               ng-model="$ctrl.filters.rating">
      </div>
    </form>
  </div>
  <div class="col-md-9">
```

* Initialize the filters to null in the FmRestaurantList constructor

```js
this.filters = {
  price: null,
  rating: null
};
```

* Inject the $rootScope service into the FmRestaurantList
* Watch the price and rating values and filter the restaurant list accordingly



```js
FmRestaurantList.prototype.$onInit = function() {
  ...
  var filterRestaurants = function() {
    _this.filteredRestaurants = [];
    angular.forEach(that.restaurants, function(restaurant) {
      if ( ( !_this.filters.rating ||
              restaurant.rating >= _this.filters.rating ) &&
           ( !_this.filters.price ||
              restaurant.price <= _this.filters.price ) ) {
        _this.filteredRestaurants.push(restaurant);
      }
    });
  };

  this.$rootScope.$watchGroup([
    function() { return that.filters.price; },
    function() { return that.filters.rating; },
    function() { return that.restaurants; }
  ], filterRestaurants);
}
```js

* Change the `ng-repeat` directive to use the `filteredRestaurants`

```html
<tr ng-repeat="restaurant in $ctrl.filteredRestaurants | orderBy : $ctrl.sortProperty : $ctrl.sortDirection">
```