# Step 7

Sortable restaurant list with basic delivery form

Add validation to delivery form:

* Load the `../js/angular-messages.js` file

```html
  <script src="../js/angular-messages.js"></script>
```

* Add the `ngMessages` modules as a dependency of our `app` module

```js
angular.module('app', ['ngMessages'])
```

* Give the form a name (`deliveryForm`) so that it is attached to the scope
* Given the inputs names (`userName`, `userAddress`) so that they are accessible in the form object
* Add `required` and `ng-minlength="..."` validators to the inputs
* Update the classes on the `form-group` elements when the inputs are invalid

```html
<div class="form-group" ng-class="{'has-error': deliveryForm.userName.$invalid}">
```

* Use `ng-messages` directive to display errors

```html
<div ng-messages="deliveryForm.userName.$error">
  <div ng-message="required" class="alert alert-warning" role="alert">You must enter a name.</div>
  <div ng-message="minlength" class="alert alert-warning" role="alert">Your name must be at least 5 characters long.</div>
</div>
```

* Fix up the initial value of `deliveryForm.visible` inside an `$scope.$evalAsync()` call

```js
  $scope.$evalAsync('deliveryForm.visible = true');
```