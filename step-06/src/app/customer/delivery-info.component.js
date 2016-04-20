angular.module('app/customer/delivery-info', [])

.component('fmDeliveryInfo', {
  bindings: {
    user: '<',
    onEditUser: '&'
  },
  templateUrl: 'src/app/customer/delivery-info.template.html'
});
