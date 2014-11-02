# Step 8

Sortable restaurant list with validated delivery form

Persist the delivery info in the local storage

* Create a new `localStorage` module in `localStorage.js`

```js
angular.module('localStorage', [])
```

* Create a `localStorage' service to wrap the browser's localStorage object

```js
.value('localStorage', window.localStorage)
```

* Create a `localStorageBinding` service that connects a property on the scope to the localStorage

```js
.factory('localStorageBinding', ['localStorage', '$rootScope', function(localStorage, $rootScope) {

  return function(key, defaultValue) {
    defaultValue = JSON.stringify(defaultValue || {});

    var value = JSON.parse(localStorage[key] || defaultValue);

    $rootScope.$watch(function() { return value; }, function() {
      localStorage[key] = JSON.stringify(value);
    }, true);

    return value;
  };
}])
```

* Load the new `localStorage.js` file

```html
  <script src="localStorage.js"></script>

```

* Add the new `localStorage` module as a dependency to our `app` module

```js
angular.module('app', ['ngMessages', 'localStorage'])

```

* Bind the `user` object to the localStorage using the `localStorageBinding` service

```js
$scope.user = localStorageBinding('foodMe/user', {
  name: 'Jo Bloggs',
  address: '123, Some Place, Some Where'
});
```