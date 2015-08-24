
// Menu

(function() {
  $(".flyout-btn").click(function() {
    $(".flyout-btn").toggleClass("btn-rotate");
    $(".overlay").toggleClass("open");
    $(".flyout").find("a").removeClass();
    
    return $(".flyout").removeClass("flyout-init fade").toggleClass("expand");
  });

  $(".flyout").find("a").click(function() {
    $(".flyout-btn").toggleClass("btn-rotate");
    $(".flyout").removeClass("expand").addClass("fade");
    return $(this).addClass("clicked");
  });

  $(".share").find("a").click(function() {
    return $(this).addClass("clicked");
  });


  $(".more, .more-back").click(function() {
  $(".card-container").toggleClass("hover");
  $(".back").toggleClass("iefix");
  });


  $(".share").click(function() {
    $(".flyout-btn").toggleClass("btn-rotate");
    $(".share-buttons-wrap").toggleClass("hide zoomIn");
    $(".overlay").toggleClass("open");
  });


  $('.removed-from-deck').delay(1000).remove();


  $(".flyout").find("a").click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href

    // do something while timeOut ticks ... 

    setTimeout(function(){
         window.location = goTo;
    }, 550);       
});  

}).call(this);




