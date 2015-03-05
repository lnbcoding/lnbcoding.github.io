$(document).ready(function() {

    $(".nav-links a").click(function(event) {
        event.preventDefault();
        $("html, body").scrollTo(this.hash, this.hash);
    });

});
