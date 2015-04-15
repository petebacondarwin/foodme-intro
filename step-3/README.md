# Step 3

Dynamically visible delivery form.

Move the deliveryForm behaviour into a Controller:

* create an `app` module and a `AppController` controller in `app.js`
* load the `app.js` file in the index.html page
* initialize the controller with a deliveryForm object
* add `showDeliveryForm()` and `hideDeliveryForm()` methods to `AppController`
* connect the `AppController` to the view using `ng-controller`