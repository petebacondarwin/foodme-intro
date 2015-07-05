# Step 6

Sortable list of restaurants

Create custom filter to display nicer price and rating values:

* Create a custom `rating` filter in the `app` module
* Use the filter in the price and rating fields

```js

.filter('rating', function() {
  return function(value, symbol) {
    var output = "";
    while(value>0) {
      output += symbol;
      value -= 1;
    }
    return output;
  };
});

```


```html
<td class="price">{{ restaurant.price | rating : '£' }}</td>
```