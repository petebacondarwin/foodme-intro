# Step 12

List of restaurants retrieved from server, sortable and filterable

Add a cool rating component for use in filtering:

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

* Define a `fmRating` component in the `rating` module

```js
angular.module('rating', [])

.component('fmRating', {
  bindings: {
    glyph: '@',
    rating: '=',
    onSelect: '&'
  },
  template:
    '<ul class="fm-rating">' +
    '  <li ng-repeat="value in $ctrl.ratings" ng-click="$ctrl.select(value)" ' +
    '      ng-class="{selected: $ctrl.isSelected(value)}">' +
    '    <span class="glyphicon glyphicon-{{$ctrl.glyph}}"></span>' +
    '  </li>' +
    '</ul>' +
    '<a ng-click="$ctrl.rating = null">clear</a>',
  controller: FmRating
});


function FmRating() {
  this.ratings = [1,2,3,4,5];
}

FmRating.prototype.select = function(value) {
  this.rating = value;
  this.onSelect();
};

FmRating.prototype.isSelected = function(value) {
  return this.rating >= value;
};
```

* Replace the input boxes with instance of this component in the Filter Restaurants form

```html
<fm-rating rating="app.filters.price" glyph="gbp"></fm-rating>
...
<fm-rating rating="app.filters.rating" glyph="star"></fm-rating>
```