# Step 9

Static mock restaurant list, with locally persisted delivery info

Load the restaurant data from a server

* Add the `$http` dependency to the `FoodmeController`

```js
.controller('FoodMeController', ['$scope', 'localStorageBinding', '$http', function($scope, localStorageBinding, $http) {
```

## File system app and remote CORS enabled data server

* Replace the static data with a call to get the restaurant data from a REST service (https://foodme.firebaseio.com/.json)

```js
  $http.get('https://foodme.firebaseio.com/.json').then(function(response) {
    $scope.restaurants = response.data;
  });
```

## Locally hosted http server app and data

* Install a local webserver

```bash
npm install -g http-server
```

* Start the server in the root of the project

```bash
cd foodme-intro
http-server
```

* Browse to the application via this server: `http://localhost:8080/step-9`
* Now you can get the restaurant data from the local server

```js
  $http.get('../data/restaurants.json').then(function(response) {
    $scope.restaurants = response.data;
  });
```