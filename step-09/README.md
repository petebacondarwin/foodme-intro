# Step 9

Static mock restaurant list, with locally persisted delivery info

Load the restaurant data from a server

* Add the `$http` dependency to the `AppController`
* Replace the static data with a call to get the restaurant data from server

```js
.controller('AppController', function($scope, localStorageBinding, $http) {

  var that = this;
  var url = '...';

  $http.get(url).then(function(response) {
    that.restaurants = response.data;
  });

```



## Remote CORS enabled server

If we are running the index.html from the file system then we must use
a CORS enabled server to provide us with the data.

```js
  var url = 'https://foodme.firebaseio.com/.json';
```



## Locally hosted http server app and data

If we are running the index.html from a webserver then we can also get
the data from this server.

* Install a local webserver

```bash
npm install -g http-server
```

* Start the server in the root of the project

```bash
cd foodme-intro
http-server
```

* Browse to the application via this server: `http://localhost:8080/step-09`
* Now you can get the restaurant data from the local server

```js
  var url = '../data/restaurants.json';
```