# Step 12

Filterable, sortable restaurant list loaded from a RESTful service

Display the number of filtered restaurants using ICU Message Format:

* Load the `angular-message-format.js` file

```html
  <script src="node_modules/angular-message-format/angular-message-format.js"></script>
```

* Add the `ngMessageFormat` module as a dependency of our `app` module

```js
angular.module('app', ['ngMessages',  'ngMessageFormat', 'localStorage'])
```

* Add a binding to the length of the `filteredRestaurants` collection using `messageFormat` syntax

```html
<div class="alert alert-info" role="alert">
  {{ $ctrl.filteredRestaurants.length, plural,
    =0 {No restaurants found!}
    =1 {Only one restaurant found!}
    other {# restaurants found.}
  }}
</div>
```