$(window).scroll(function() {
    var section1 = $('.section1');
    var section2 = $('.section2');
    var distance = section2.offset().top - section1.offset().top;
  
    if ($(this).scrollTop() >= section1.offset().top && $(this).scrollTop() <= section2.offset().top - $(this).height()) {
      section2.css({
        'transform': 'translateY(' + distance + 'px)',
        'transition': 'transform 5s ease-in-out'
      });
    } else {
      section2.css({
        'transform': 'translateY(50px)',
        'transition': 'transform 0.8s ease-in-out'
      });
    }
  });
  