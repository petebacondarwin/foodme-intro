# Step 12

Filterable, sortable restaurant list loaded from a REST service

Display the number of filtered restaurants:

* Add a binding to the length of the `filteredRestaurants` collection using `ng-pluralize` directive

```html
<div class="alert alert-info" role="alert">
  <ng-pluralize
    count="filteredRestaurants.length"
    when="{'0'    : 'No restaurants found.',
           'one'  : 'Only 1 restaurant found!',
           'other': '{} restaurants found!'}">
  </ng-pluralize>
</div>
```