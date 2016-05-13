/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).ready(function() {
  $.validator.methods.email = function( value, element ) {
  return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
}
  $.validator.addMethod('phone', function( value, element ){
    return this.optional( element ) || /^\d{3}-\d{3}-\d{4}$/.test ( value );
  }, "Please enter a valid phone number.");

    $('#order-form').validate({

      rules: {
            "your-name": {
                required: true,
                maxlength: 128
            },
            "your-zip": {
                required: true,
                maxlength: 5,
                digits: true
            },
            "your-email":{
              email:true
            },
            "phonenum":{
            phone: true
          }
      }
    });
});
