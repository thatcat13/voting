$(document).ready(function() {
  $("button#input-age").click(function(event) {
    event.preventDefault();
  var age = parseInt($("input#age").val());
  if (age >= 18) {
    $("#over-18-tab").show();
    $("#age-tab").hide();
  } else {
    $("#under-18-tab").show();
    $("#age-tab").hide();
  }

  });



});
