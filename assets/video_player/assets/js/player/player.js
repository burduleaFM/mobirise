var frm = $('#bt_24');

frm.submit(function (e) {

    e.preventDefault();

    $.ajax({
        type: 'POST',
        url: frm.attr('action'),
        data: frm.serialize(),
        success: function (data) {
            console.log('Submission was successful.');

            $('#success-alert').removeAttr("hidden");

            $('#name').val("")
            $('#email').val("")
            $('#phone').val("")
            $('#company').val("")
            $('#post').val("")
            $('#comments').val("")
            Var widgetid = grecaptcha.render('html_element', {
            'sitekey' : '6LdlOPcUAAAAAJOMXspNIKHWoQg8r5A_LzwmN4A3'
            });
        grecaptcha.reset(widgetid); 

        },
        error: function (data) {
            console.log('An error occurred.');
            $("#error-alert").removeAttr("hidden")
        },
    });
});
