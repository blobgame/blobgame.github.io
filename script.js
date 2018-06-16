document.addEventListener("DOMContentLoaded", function() {
  // document.querySelector(".open").addEventListener(
  //   "click",
  //   function(e) {
  //     this.classList.add("oppenned");
  //     e.stopPropagation();
  //   },
  //   false
  // );

  // document.querySelector("body").addEventListener(
  //   "click",
  //   function() {
  //     document.querySelector(".open").classList.remove("oppenned");
  //   },
  //   false
  // );

  // document.querySelector(".cls").addEventListener(
  //   "click",
  //   function(e) {
  //     document.querySelector(".open").classList.remove("oppenned");
  //     e.stopPropagation();
  //   },
  //   false
  // );

  $(document).on("click", ".open", function(event) {
    $(this).toggleClass("oppenned");
    event.stopPropagation();
  });
  $(document).on("click", "body", function(event) {
    $(".open").removeClass("oppenned");
  });


  $(".slick").slick({
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 2,
    arrows: true,
    responsive: [
    
      {
        breakpoint: 970,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1
        }
      }
    ]
  });

  var ua = navigator.userAgent;
  var start = "mousedown";
  var move = "mousemove";
  var end = "mouseup";

  var ink, d, x, y;
  $(".ripplelink, .slick-arrow").on(start, function(e) {
    if ($(this).find(".ink").length === 0) {
      $(this).prepend("<span class='ink'></span>");
    }

    ink = $(this).find(".ink");
    ink.removeClass("animate");

    if (!ink.height() && !ink.width()) {
      d = Math.max($(this).outerWidth(), $(this).outerHeight());
      ink.css({ height: d, width: d });
    }

    x = e.originalEvent.pageX - $(this).offset().left - ink.width() / 2;
    y = e.originalEvent.pageY - $(this).offset().top - ink.height() / 2;

    ink.css({ top: y + "px", left: x + "px" }).addClass("animate");
  });
});
