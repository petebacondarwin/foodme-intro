angular.module('app/customer/user-form', [])

.component('fmUserForm', {
  templateUrl: 'src/app/customer/user-form.template.html',
  bindings: {
    user: '<',
    onSave: '&'
  },
  controller: FmUserForm
});

function FmUserForm() {}
FmUserForm.prototype.$onChanges = function(changes) {
  if (changes.user) {
    // Clone the user object to prevent modifying the outer object
    this.user = angular.copy(this.user);
  }
};
FmUserForm.prototype.save = function() {
  this.onSave({ user: this.user });
};