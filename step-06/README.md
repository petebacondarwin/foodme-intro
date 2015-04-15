# Step 6

Sortable list of restaurants

Create custom filter to display price and rating better:

* Create a custom `rating` filter in the `app` module - we must use `$sce.trustAsHtml` since we are generating HTML.
* Use the filter in the price and rating fields, with the `ng-bind-html` directive

```js

.filter('rating', ['$sce', function($sce) {
  return function(value, glyph) {
    var output = "";
    while(value>0) {
      output += '<span class="glyphicon glyphicon-' + glyph + '"></span>';
      value -= 1;
    }
    return $sce.trustAsHtml(output);
  };
}]);

```


```html
<td class="price" ng-bind-html="restaurant.price | rating : 'gbp'">
</td>
```