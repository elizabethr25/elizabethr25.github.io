"use strict";

$(document).ready(function() {
  // Navbar movement
  $("#offCanvas").on("click", function() {
    $(".nav-offcanvas").addClass("open");
    $(".offcanvas-overlay").addClass("on");
  });
  $("#offCanvasClose, .offcanvas-overlay").on("click", function() {
    $(".nav-offcanvas").removeClass("open");
    $(".offcanvas-overlay").removeClass("on");
  });

  // about-me link scroll
  $("#about-me-link").on("click", function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      "slow"
    );
  });

  // project link scroll
  $("#project-link").on("click", function() {
    $("html,body").animate(
      {
        scrollTop: $(".projects").offset().top
      },
      "slow"
    );
  });

  // connect link scroll
  $("#connect-link").on("click", function() {
    console.log("clicked");
    $("html,body").animate(
      {
        scrollTop: $(".connect").offset().top
      },
      "slow"
    );
  });

 

  // const scrollTo = (where, speed) => {
  //   const position = $(where).offset().top;

  //   $("html,body").animate(
  //     {
  //       scrollTop: position
  //     },
  //     speed
  //   );
  // };

});
