# Step 12

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
angular.module('app', ['ngMessages', 'ngMessageFormat', 'localStorage', 'rating'])
```

* Define a `fmRating` directive in the `rating` module

```js
.directive('fmRating', function() {
  return {
    restrict: 'E',

    scope: {},
    bindToController: {
      glyph: '@',
      rating: '=',
      onSelect: '&'
    },
    controllerAs: 'ctrl',
    controller: function() {

      this.ratings = [1,2,3,4,5];

      this.select = function(value) {
        this.rating = value;
        this.onSelect();
      };

      this.isSelected = function(value) {
        return this.rating >= value;
      };
    },

    template:
      '<ul class="fm-rating">' +
      '  <li ng-repeat="value in ctrl.ratings" ng-click="ctrl.select(value)" ' +
      '      ng-class="{selected: ctrl.isSelected(value)}">' +
      '    <span class="glyphicon glyphicon-{{ctrl.glyph}}"></span>' +
      '  </li>' +
      '</ul>' +
      '<a ng-click="ctrl.rating = null">clear</a>'
  };
});
```

* Use this directive in the **Filter Restaurants** form instead of the input boxes

```html
<fm-rating rating="app.filters.price" glyph="gbp"></fm-rating>
```