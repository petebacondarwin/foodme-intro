angular.module('app/customer/user-service', [
  'common/local-storage/local-storage'
])
.factory('userService', function(localStorage) {
  var _key = 'foodMe/user';
  var _user = JSON.parse(localStorage[_key] || '{}');
  return {
    get: function() {
      return _user;
    },
    save: function(user) {
      _user = user;
      localStorage[_key] = JSON.stringify(_user || {});
    }
  };
});