# Step 5

We are able to view and update the delivery info.

Create a new fmRestaurantList component

* Create a new fmRestaurantList component
* Move the static restaurant list HTML into the template for fmRestaurantList
* Add the new module as a dependency of the app module
* Use the fmRestaurantList component in the index template.

Display a data driven list of restaurants using a repeated template

* Initialize a mock list of restaurants in the FmRestaurantList controller.
* Bind the template to the list of restaurants using the `ng-repeat` directive


```js

this.restaurants = [
  {
    "price": 3,
    "rating": 3,
    "id": "esthers",
    "name": "Esther's German Saloon",
    "cuisine": "german",
    "opens": "11:30:00",
    "closes": "22:30:00",
    "location": "22 Teutonic Ave.",
    "description": "German home-cooked meals and fifty-eight different beers on tap. To get more authentic, you'd need to be wearing lederhosen."
  },
  {
    "price": 4,
    "rating": 5,
    "id": "robatayaki",
    "name": "Robatayaki Hachi",
    "cuisine": "japanese",
    "opens": "17:30:00",
    "closes": "23:30:00",
    "location": "8 Hawthorne Ln.",
    "description": "Japanese food the way you like it. Fast, fresh, grilled."
  },
  {
    "price": 5,
    "rating": 4,
    "id": "bateaurouge",
    "name": "Le Bateau Rouge",
    "cuisine": "french",
    "opens": "17:00:00",
    "closes": "23:30:00",
    "location": "2 South Park Dr.",
    "description": "Fine French dining in a romantic setting. From soupe à l'oignon to coq au vin, let our chef delight you with a local take on authentic favorites."
  }
];

```


```js

<tr ng-repeat="restaurant in $ctrl.restaurants">
  <td class="description">
    <div class="media">
      <a class="pull-left">
        <img class="img-rounded" ng-src="assets/img/restaurants/{{restaurant.id}}.jpg">
      </a>
      <div class="media-body">
        <h4 class="media-heading">{{restaurant.name}}</h4>
        <p>{{restaurant.description}}</p>
      </div>
    </div>
  </td>
  <td class="rating">
    {{restaurant.rating}}
  </td>
  <td class="price">
    {{restaurant.price}}
  </td>
</tr>

```