var main = function() {
  /* Push the body and the nav over by 285px over */
  $('form').submit(function(event) {
        var $input = $(event.target).find('input');
        var comment = $input.val();

        if (comment !== "") {
            var html = $('<li>').text(comment);
            html.prependTo('#comments');
            $input.val("");
        }

        return false;
    });
  
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};

$(document).ready(main);