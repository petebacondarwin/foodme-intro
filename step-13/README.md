# Step 12

List of restaurants retrieved from server, sortable and filterable

Add a cool rating component for use in filtering:

* Create a `fmRating` component in its own module

```js
angular.module('common/rating/rating-component', [])
.component('fmRating', {
  bindings: {
    glyph: '@',
    rating: '=',
    onSelect: '&'
  },
  templateUrl: 'src/common/rating/rating.template.html',
  controller: FmRating
});
function FmRating() {
  this.ratings = [1,2,3,4,5];
}
FmRating.prototype.select = function(value) {
  this.rating = value;
  this.onSelect();
};
```

* Create the template for the fmRating component

```html
<ul class="fm-rating">
  <li ng-repeat="value in $ctrl.ratings" ng-click="$ctrl.select(value)"
      ng-class="{selected: $ctrl.rating >= value}">
    <span class="glyphicon glyphicon-{{$ctrl.glyph}}"></span>
  </li>
</ul>
<a ng-click="$ctrl.rating = null">clear</a>

```
* Add the `rating` module as a dependency of our `fmRestaurant` component's module

```js
angular.module('app/restaurants/restaurant-list', [
  'common/rating/rating-filter',
  'common/rating/rating-component'
])
```

* Replace the input boxes with instance of this component in the Filter Restaurants form

```html
<fm-rating rating="app.filters.price" glyph="gbp"></fm-rating>
...
<fm-rating rating="app.filters.rating" glyph="star"></fm-rating>
```