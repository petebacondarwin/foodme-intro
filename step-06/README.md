# Step 6

Displaying a list of restaurants from static mock data

Use the orderBy filter to sort the restaurant list by price or rating:

* Initialize `sortProperty` and `sortDirection` on the `FmRestaurantList` constructor for sorting columns
* Add an `orderBy` filter to the `ng-repeat` using these properties: `ng-repeat="restaurant in $ctrl.restaurants | orderBy : sortProperty : sortDirection"`
* Create helper methods in `FmRestaurantList.prototype`: `sortBy(property)` and `getSortClass(property)`
* Convert the table headings to clickable anchors with `ng-click="$ctrl.sortBy('name')"` directives
* Display sort direction up/down markers using `ng-class="$ctrl.getSortClass('name')"` directives
