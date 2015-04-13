angular.module('rating', [])

.directive('fmRating', function() {
  return {
    restrict: 'E',

    scope: {
      glyph: '@',
      rating: '=',
      onSelect: '&'
    },

    link: function(scope, element, attrs) {

      scope.ratings = [1,2,3,4,5];

      scope.select = function(value) {
        scope.rating = value;
        scope.onSelect();
      };

      scope.isSelected = function(value) {
        return scope.rating >= value;
      };
    },

    template:
      '<ul class="fm-rating">' +
      '  <li ng-repeat="value in ratings" ng-click="select(value)" ' +
      '      ng-class="{selected: isSelected(value)}">' +
      '    <span class="glyphicon glyphicon-{{glyph}}"></span>' +
      '  </li>' +
      '</ul>' +
      '<a ng-click="rating = null">clear</a>'
  };
});