angular.module('app', [
  'ngMessages',
  'ngMessageFormat',
  'app/customer/user-form',
  'app/customer/delivery-info',
  'app/customer/user-service',
  'app/restaurants/restaurant-list'
])

.controller('AppController', function(userService) {

  this.deliveryFormVisible = true;

  this.user = userService.get();

  this.showDeliveryForm = function() {
    this.deliveryFormVisible = true;
  };

  this.hideDeliveryForm = function() {
    this.deliveryFormVisible = false;
  };

  this.saveUser = function(user) {
    userService.save(user);
    this.user = user;
    this.hideDeliveryForm();
  };
});