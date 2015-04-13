# Step 13

Filterable, sortable restaurant list loaded from a REST service

Add transition animations to the delivery form:

* load `../js/angular-animate.js` file

```
<script src="../shared/js/angular-animate.js"></script>
```

* Add a dependency on `ngAnimate` to the `app` module:

```js
angular.module('app', ['ngMessages', 'ngAnimate', 'localStorage', 'rating'])
```

* add new class (`fade`) to the delivery form and delivery info elements to be animated

```html
<div class="row fade" ng-show="deliveryForm.visible">
```
