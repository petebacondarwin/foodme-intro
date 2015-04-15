angular.module('localStorage', [])


.value('localStorage', window.localStorage)


.factory('localStorageBinding', function(localStorage, $rootScope) {

  return function(key, defaultValue) {
    defaultValue = JSON.stringify(defaultValue || {});

    var value = JSON.parse(localStorage[key] || defaultValue);

    $rootScope.$watch(function() { return value; }, function() {
      localStorage[key] = JSON.stringify(value);
    }, true);

    return value;
  };
});