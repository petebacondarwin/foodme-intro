# Step 3

Dynamically visible deliver to form.

Add transition animations to the visibility changes:

* load `../js/angular-animate.js` file
* create an `app` module, in `app.js`, which depdends upon `ngAnimate`
* load `app.js` file
* specify `app` module in `ng-app` directive
* add new class (`fade`) to the elements to be animated
* link to `../css/app.css` stylesheet containing the transitions