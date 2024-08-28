$(document).ready(function () {
    $("#right").click(function () {
      var x = window.innerWidth - $("div").innerWidth();
      $("div").animate(
        {
          left: x,
        },
        1000
      );
    });
  
    $("#left").click(function () {
      $("div").animate(
        {
          left: "0px",
        },
        1000
      );
    });
  
    $("#up").click(function () {
      $("div").animate(
        {
          top: "0px",
        },
        1000
      );
    });
  
    $("#down").click(function () {
      var y = window.innerHeight - $("div").innerHeight();
      $("div").animate(
        {
          top: y,
        },
        1000
      );
    });
  });
  