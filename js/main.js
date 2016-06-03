$(document).ready(function () {
    var selector = '.nav li';

    $(selector).on('click', function(){
        $(selector).removeClass('active');
        $(this).addClass('active');
    });

    
    $('.viewport-html').viewportChecker({
        // Class to add to the elements when they are visible
        classToAdd: 'visible',
        // The offset of the elements (let them appear earlier or later)
        offset: 50,
        // Add the possibility to remove the class if the elements are not visible
        repeat: true,
         // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
        callbackFunction: function(elem, action){ 
            //432 and 409
            $('.html').animate({width:'431px'},3000); //95%
            
        }
    });

    $('.viewport-css').viewportChecker({
        classToAdd: 'visible',
        offset: 50,
        repeat: true,
        callbackFunction: function(elem, action){ 
            $('.css').animate({width:'431px'},3000); //95%
        }
    });
    
    $('.viewport-js').viewportChecker({
        classToAdd: 'visible',
        offset: 50,
        repeat: true,
        callbackFunction: function(elem, action){ 
            $('.js').animate({width:'408px'},3000); //90%
        }
    });
    
    $('.viewport-jquery').viewportChecker({
        classToAdd: 'visible',
        offset: 50,
        repeat: true,
        callbackFunction: function(elem, action){ 
            $('.jquery').animate({width:'408px'},3000); //90%
        }
    });

    $('.viewport-bootstrap').viewportChecker({
        classToAdd: 'visible',
        offset: 50,
        repeat: true,
        callbackFunction: function(elem, action){ 
            $('.bootstrap').animate({width:'408px'},3000); //90%
        }
    });
    
    $('.viewport-sql').viewportChecker({
        classToAdd: 'visible',
        offset: 50,
        repeat: true,
        callbackFunction: function(elem, action){ 
            $('.sql').animate({width:'431px'},3000); //95%
        }
    });
    
    
    //$('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
    
});

