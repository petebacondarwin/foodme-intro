# Step 9

Sortable restaurant list with validated delivery form

Create angular services that persist values to the browser's localStorage.

* Create a localStorage service to wrap the browser's localStorage object
* Create a userService service that stores the user object in localStorage
* Add the app/customer/user-service module as a dependency to our app module

Use these services to persist changes to the user property of the AppController.

* Inject the userService service into the AppController
* Load the user in the AppController
* Add a helper method to save the user in the AppController
* Update the on-save handler to call the new helper method
