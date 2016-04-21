angular.module('common/rating/rating-component', [])

.component('fmRating', {
  bindings: {
    glyph: '@',
    rating: '=',
    onSelect: '&'
  },
  templateUrl: 'src/common/rating/rating.template.html',
  controller: FmRating
});

function FmRating() {
  this.ratings = [1,2,3,4,5];
}

FmRating.prototype.select = function(value) {
  this.rating = value;
  this.onSelect();
};