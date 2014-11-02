# Step 5

Displaying a list of restaurants from static mock data

Implement sorting of the restaurant list:

* Initialize `sortProperty` and `sortDirection` on the scope for sorting columns
* Add a `orderBy` filter to the `ng-repeat` using this properties: `ng-repeat="restaurant in restaurants | orderBy : sortProperty : sortDirection"`
* Create helper methods in the controller, `sortBy(property)` and `getSortClass(property)`
* Convert the table headings to clickable anchors with `ng-click="sortBy('name')"` directives
* Display sort direction up/down markers using `ng-class="getSortClass('name')"` directives
