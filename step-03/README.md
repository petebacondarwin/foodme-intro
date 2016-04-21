# Step 3

Dynamically visible delivery form.

Move the deliveryForm behaviour into a Controller:

* create an `app` module and register a controller called `AppController` in `app.js`
* load the `app.js` file in the index.html page
* boot the `app` module using the `ng-app` directive
* initialize the controller with a `deliveryFormVisible` property and a `user` property
* add `showDeliveryForm()` and `hideDeliveryForm()` methods to `AppController`
* connect the `AppController` to the view as `app` using `ng-controller`
* Update the `ng-model`, `ng-show`, `ng-hide` and interpolation bindings to reference the `app` controller