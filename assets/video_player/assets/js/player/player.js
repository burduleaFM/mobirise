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
           
            setTimeout(function(){// wait for 5 secs(2)
               window.location.replace("https://md.solutions.kompass.com/ru/g/liste-kompass");
          }, 4000); 
              
        },
        error: function (data) {
            console.log('An error occurred.');
            $("#error-alert").removeAttr("hidden")
        },
    });
});
