angular.module('rating', [])

.directive('fmRating', function() {
  return {
    restrict: 'E',

    scope: {},
    bindToController: {
      glyph: '@',
      rating: '=',
      onSelect: '&'
    },
    controllerAs: 'ctrl',
    controller: function() {

      this.ratings = [1,2,3,4,5];

      this.select = function(value) {
        this.rating = value;
        this.onSelect();
      };

      this.isSelected = function(value) {
        return this.rating >= value;
      };
    },

    template:
      '<ul class="fm-rating">' +
      '  <li ng-repeat="value in ctrl.ratings" ng-click="ctrl.select(value)" ' +
      '      ng-class="{selected: ctrl.isSelected(value)}">' +
      '    <span class="glyphicon glyphicon-{{ctrl.glyph}}"></span>' +
      '  </li>' +
      '</ul>' +
      '<a ng-click="ctrl.rating = null">clear</a>'
  };
});