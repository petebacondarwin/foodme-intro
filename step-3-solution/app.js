angular.module('app', [])

.controller('AppController', function() {

  this.deliveryForm = {
    visible: true
  };

  this.user = {
    name: 'Jo Bloggs',
    address: '123, Some Place, Some Where'
  };

  this.showDeliveryForm = function() {
    this.deliveryForm.visible = true;
  };

  this.hideDeliveryForm = function() {
    this.deliveryForm.visible = false;
  };

});