angular.module('app', [])

.controller('AppController', function() {

  this.deliveryFormVisible = true;

  this.user = {
    name: 'Jo Bloggs',
    address: '123, Some Place, Some Where'
  };

  this.showDeliveryForm = function() {
    this.deliveryFormVisible = true;
  };

  this.hideDeliveryForm = function() {
    this.deliveryFormVisible = false;
  };

});