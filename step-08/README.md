# Step 8

Sortable restaurant list with basic delivery form

Move deliveryForm to its own component

* Create a new fmUserForm component
* Add the new module as a dependency of the app module
* Move the deliveryForm HTML into the template for fmUserForm
* Use the fmRestaurantList component in the index template.
* Add a $onChanges hook to make a local copy of the user input object
* Add a save helper method that triggers the onSave output event
* Move the ng-show directive from the form to the index.htm
* Change the "Hide" link to a "Save" link and call save on click
* Change all references of app to $ctrl in the fmUserForm template


Add validation and error styling to the form:

* Give the form a name (`app.userForm`) so that it is attached to the controller
* Given the inputs names (`userName`, `userAddress`) so that they are accessible in the form object
* Add `required` and `ng-minlength="..."` validators to the inputs
* Update the classes on the `form-group` elements when the inputs are invalid

Add error messages to the form

* Load the `../js/angular-messages.js` file
* Add the `ngMessages` modules as a dependency of our `app` module
* Use `ng-messages` directive to display errors