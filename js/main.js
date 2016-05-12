/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).ready(function() {
    $('#order-form').validate({
        framework: 'bootstrap',
        //adjusting feedback icons use glyphicon checkmark and cross mark
        icon: {
            valid: 'glyphicons-ok-sign',
            invalid: 'glyphicon glyphicons-exclamation-sign',
            validating: 'glyphicon glyphicon-refresh',
        },

    });
});
