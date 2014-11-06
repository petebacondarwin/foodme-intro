# Step 10

List of restaurants retrieved from server, sortable and filterable

Add a cool rating directive for use in filtering:

* Create a new file `rating.js` containing a `rating` module

```js
angular.module('rating', [])
```

* Load the `rating.js` file

```html
  <script src="rating.js"></script>

```

* Add the `rating` module as a dependency of our `app` module

```js
angular.module('app', ['ngMessages', 'localStorage', 'rating'])
```

* Define a `fmRating` directive in the `rating` module

```js
.directive('fmRating', function() {
  return {
    restrict: 'E',

    scope: {
      glyph: '@',
      rating: '='
    },

    link: function(scope, element, attrs) {

      scope.ratings = [1,2,3,4,5];

      scope.select = function(value) {
        scope.rating = value;
      };

      scope.isSelected = function(value) {
        return scope.rating >= value;
      };
    },

    template:
      '<ul class="fm-rating">' +
      '  <li ng-repeat="value in ratings" ng-click="select(value)" ng-class="{selected: isSelected(value)}">' +
      '    <span class="glyphicon glyphicon-{{glyph}}"></span>' +
      '  </li>' +
      '</ul>' +
      '<a ng-click="rating = null">clear</a>'
  };
});
```

* Use this directive in the **Filter Restaurants** form instead of the input boxes

```html
<fm-rating rating="filters.price" glyph="gbp"></fm-rating>
```