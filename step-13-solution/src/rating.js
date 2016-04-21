angular.module('rating', [])

.component('fmRating', {
  bindings: {
    glyph: '@',
    rating: '=',
    onSelect: '&'
  },
  template:
    '<ul class="fm-rating">' +
    '  <li ng-repeat="value in $ctrl.ratings" ng-click="$ctrl.select(value)" ' +
    '      ng-class="{selected: $ctrl.isSelected(value)}">' +
    '    <span class="glyphicon glyphicon-{{$ctrl.glyph}}"></span>' +
    '  </li>' +
    '</ul>' +
    '<a ng-click="$ctrl.rating = null">clear</a>',
  controller: FmRating
});


function FmRating() {
  this.ratings = [1,2,3,4,5];
}

FmRating.prototype.select = function(value) {
  this.rating = value;
  this.onSelect();
};

FmRating.prototype.isSelected = function(value) {
  return this.rating >= value;
};