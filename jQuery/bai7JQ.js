$(document).ready(function () {
    var speed = 300;
    $("#container div").mouseover(function () {
      $(this).animate(
        {
          width: "+=150px",
          fontSize: "8em",
          font: 800,
        },
        speed
      );
    });
  
    $("#container div").mouseout(function () {
      $(this).animate(
        {
          width: "20%",
          fontSize: "4em",
          font: 400,
        },
        speed
      );
    });
  });
  