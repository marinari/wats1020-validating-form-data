/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).ready(function() {
  //function for a strict limit on email address
  $.validator.methods.email = function( value, element ) {
  return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
}
  //function for phone number accepts only dashes between digits
  $.validator.addMethod('phone', function( value, element ){
    return this.optional( element ) || /^\d{3}-\d{3}-\d{4}$/.test ( value );
  }, "Please enter a valid phone number.");
  
  //function to validate known state abbreviations
  $.validator.addMethod('stateprop', function(value) {
    var states = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
        "AS", "DC", "FM", "GU", "MH", "MP", "PR", "PW", "VI"
    ];
    return $.inArray(value.toUpperCase(), states) != -1;
}, "Please enter a valid U.S. state or territory.");

    $('#order-form').validate({

      rules: {
            "your-name": {
                required: true,
                maxlength: 128
            },
            "your-state":{
              required: true,
              maxlength: 2,
              stateprop: true
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
          "your-website": {
            url: true
          }
          "card-holder-name": {
            required: true,
            maxlength: 128
          }
          "card-number": {
            required: true,
            creditcard: true
          }
          "cvv": {
            required: true,
            maxlength: 3,
            digits: true
          }

      }
    });
});
