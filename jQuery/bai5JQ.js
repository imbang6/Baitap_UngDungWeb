$(document).ready(function () {
    $("img")
      .mouseover(function () {
        $(this)
          .attr("src", "/Images/banhbao.jpg")
          .animate({ height: "+=200px", width: "+=200px" });
      })
      .mouseout(function () {
        $(this)
          .attr("src", "/Images/banhmi.jpg")
          .animate({ height: "-=200px", width: "-=200px" });
      });
  });
  