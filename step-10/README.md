# Step 10

Static mock restaurant list, with locally persisted delivery info

Load the restaurant data from a server

* Inject the `$http` dependency into the `FmRestaurantList`
* Remove the static data from the FmRestaurantList constructor
* Add a `$onInit` hook that calls `$http` to get the restaurant data from server
* Specify the url to the restaurant data: on the CORS enabled server or on the local web server


## Remote CORS enabled server

If we are running the index.html from the file system then we must use
a CORS enabled server to provide us with the data.

```js
  var url = 'https://foodme.firebaseio.com/.json';
```


## Locally hosted http server app and data

If we are running the index.html from a webserver then we can also get
the data from this server.

```js
  var url = '../shared/data/restaurants.json';
```
