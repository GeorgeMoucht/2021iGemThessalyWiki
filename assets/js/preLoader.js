var timeoutID;

jQuery(document).ready(function() {
    // start hiding the message after 2 seconds
    timeoutID = window.setTimeout(hideMessage, 2000);
});

function hideMessage() {
    jQuery('.preloader').animate({
        opacity: 0
    }, 800, function() {
        jQuery('.preloader').css({
            display: 'none'
        });
    });
}